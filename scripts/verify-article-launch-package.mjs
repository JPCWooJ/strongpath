#!/usr/bin/env node

const slug = process.argv[2]

if (!slug) {
  console.error('Usage: node scripts/verify-article-launch-package.mjs <article-slug>')
  process.exit(1)
}

const siteOrigin = 'https://www.strongpath.com'
const articleUrl = `${siteOrigin}/blog/${slug}`
const sitemapUrl = `${siteOrigin}/sitemap.xml`

const checks = []

function add(status, name, note) {
  checks.push({ status, name, note })
}

function normalizeUrl(value) {
  try {
    return new URL(value, siteOrigin).toString().replace(/\/$/, '')
  } catch {
    return null
  }
}

function getTags(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
}

function getAttr(tag, attrName) {
  const pattern = new RegExp(`${attrName}\\s*=\\s*["']([^"']+)["']`, 'i')
  return tag.match(pattern)?.[1]?.trim() || ''
}

function findMeta(html, name) {
  return getTags(html, 'meta').find((tag) => getAttr(tag, 'name').toLowerCase() === name)
}

function findCanonical(html) {
  return getTags(html, 'link').find((tag) => getAttr(tag, 'rel').toLowerCase() === 'canonical')
}

function extractLinks(html) {
  return getTags(html, 'a')
    .map((tag) => getAttr(tag, 'href'))
    .filter(Boolean)
}

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'user-agent': 'StrongPathArticleVerifier/1.0',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
  })
  const text = await response.text()
  return { response, text }
}

async function checkUrl(url) {
  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'user-agent': 'StrongPathArticleVerifier/1.0' },
    })

    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'user-agent': 'StrongPathArticleVerifier/1.0' },
      })
    }

    return response.status
  } catch {
    return null
  }
}

let articleResponse
let html = ''

try {
  const result = await fetchText(articleUrl)
  articleResponse = result.response
  html = result.text
  add(
    articleResponse.status === 200 ? 'PASS' : 'FAIL',
    'production article URL returns HTTP 200',
    `HTTP ${articleResponse.status}`
  )
} catch (error) {
  add('UNKNOWN', 'production article URL returns HTTP 200', error.message)
}

if (html) {
  const expectedUrl = articleUrl.replace(/\/$/, '')
  const canonicalTag = findCanonical(html)
  const canonicalUrl = canonicalTag ? normalizeUrl(getAttr(canonicalTag, 'href')) : null
  add(
    canonicalUrl === expectedUrl ? 'PASS' : 'FAIL',
    'canonical URL exists and matches production article URL',
    canonicalUrl ? canonicalUrl : 'canonical not found'
  )

  const robotsMeta = findMeta(html, 'robots')
  const robotsContent = robotsMeta ? getAttr(robotsMeta, 'content').toLowerCase() : ''
  const xRobots = articleResponse?.headers.get('x-robots-tag')?.toLowerCase() || ''
  const noindex = robotsContent.includes('noindex') || xRobots.includes('noindex')
  add(
    noindex ? 'FAIL' : 'PASS',
    'page is not marked noindex',
    noindex ? `robots=${robotsContent || xRobots}` : 'no noindex signal found'
  )

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || ''
  add(title ? 'PASS' : 'FAIL', 'page has title', title || 'title not found')

  const description = findMeta(html, 'description')
  const descriptionText = description ? getAttr(description, 'content') : ''
  add(
    descriptionText ? 'PASS' : 'FAIL',
    'page has meta description',
    descriptionText || 'meta description not found'
  )

  const links = extractLinks(html)
  const amazonLinks = links.filter((href) => /amazon\.com/i.test(href))
  add(
    'PASS',
    'Amazon outbound links are detected if present',
    amazonLinks.length ? `${amazonLinks.length} Amazon link(s) detected` : 'no Amazon links present'
  )

  const hasAffiliateDisclosure =
    /affiliate disclosure/i.test(html) ||
    /amazon associate/i.test(html) ||
    /qualifying amazon purchases/i.test(html)
  add(
    amazonLinks.length === 0 || hasAffiliateDisclosure ? 'PASS' : 'FAIL',
    'affiliate disclosure text exists if Amazon links are present',
    amazonLinks.length === 0
      ? 'not required; no Amazon links found'
      : hasAffiliateDisclosure
        ? 'affiliate disclosure text found'
        : 'Amazon links found without disclosure text'
  )

  const internalLinks = links
    .map((href) => normalizeUrl(href))
    .filter((href) => href?.startsWith(siteOrigin))
    .filter((href) => href !== expectedUrl)
  add(
    internalLinks.length ? 'PASS' : 'FAIL',
    'internal StrongPath links are detected',
    internalLinks.length ? `${new Set(internalLinks).size} internal link(s) detected` : 'none found'
  )

  const hasMedicalNote =
    /medical note/i.test(html) ||
    /not medical advice/i.test(html) ||
    /informational and educational/i.test(html)
  add(
    hasMedicalNote ? 'PASS' : 'FAIL',
    'medical note/disclaimer text is detected for health/YMYL content',
    hasMedicalNote ? 'medical disclaimer text found' : 'medical disclaimer text not found'
  )

  if (internalLinks.length) {
    const uniqueInternalLinks = [...new Set(internalLinks)]
    const checkedLinks = []
    const brokenLinks = []

    for (const link of uniqueInternalLinks) {
      const status = await checkUrl(link)
      checkedLinks.push({ link, status })
      if (status === null || status >= 400) brokenLinks.push({ link, status })
    }

    add(
      brokenLinks.length ? 'FAIL' : 'PASS',
      'obvious broken primary links are detected where feasible',
      brokenLinks.length
        ? brokenLinks.map(({ link, status }) => `${status || 'UNKNOWN'} ${link}`).join('; ')
        : `${checkedLinks.length} internal link(s) checked`
    )
  } else {
    add('UNKNOWN', 'obvious broken primary links are detected where feasible', 'no internal links to check')
  }
} else {
  add('UNKNOWN', 'canonical URL exists and matches production article URL', 'article HTML unavailable')
  add('UNKNOWN', 'page is not marked noindex', 'article HTML unavailable')
  add('UNKNOWN', 'page has title', 'article HTML unavailable')
  add('UNKNOWN', 'page has meta description', 'article HTML unavailable')
  add('UNKNOWN', 'affiliate disclosure text exists if Amazon links are present', 'article HTML unavailable')
  add('UNKNOWN', 'Amazon outbound links are detected if present', 'article HTML unavailable')
  add('UNKNOWN', 'internal StrongPath links are detected', 'article HTML unavailable')
  add('UNKNOWN', 'medical note/disclaimer text is detected for health/YMYL content', 'article HTML unavailable')
  add('UNKNOWN', 'obvious broken primary links are detected where feasible', 'article HTML unavailable')
}

try {
  const { response, text } = await fetchText(sitemapUrl)
  if (response.status !== 200) {
    add('FAIL', 'sitemap includes production article URL', `sitemap HTTP ${response.status}`)
  } else {
    const found = text.includes(articleUrl)
    add(
      found ? 'PASS' : 'FAIL',
      'sitemap includes production article URL',
      found ? 'article URL found in sitemap' : 'article URL not found in sitemap'
    )
  }
} catch (error) {
  add('UNKNOWN', 'sitemap includes production article URL', error.message)
}

const counts = checks.reduce(
  (summary, check) => {
    summary[check.status] += 1
    return summary
  },
  { PASS: 0, FAIL: 0, UNKNOWN: 0 }
)

console.log(`ARTICLE ${slug}`)
console.log('')
console.log(`URL ${articleUrl}`)
console.log('')
console.log('CHECKS')
for (const check of checks) {
  console.log(`${check.status} - ${check.name} - ${check.note}`)
}
console.log('')
console.log('SUMMARY')
console.log(`PASS: ${counts.PASS}`)
console.log(`FAIL: ${counts.FAIL}`)
console.log(`UNKNOWN: ${counts.UNKNOWN}`)

if (counts.FAIL > 0) process.exitCode = 1
