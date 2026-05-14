import type { PortableTextBlock } from '@portabletext/react'
import type { Post } from '@/lib/sanity'

type LinkPart = {
  text: string
  href: string
}

type BlockPart = string | LinkPart

let blockIndex = 0
let spanIndex = 0

function span(text: string, marks: string[] = []) {
  spanIndex += 1
  return {
    _key: `s${spanIndex}`,
    _type: 'span',
    marks,
    text,
  }
}

function block(style: string, parts: BlockPart[]): PortableTextBlock {
  blockIndex += 1
  const markDefs: Array<{ _key: string; _type: 'link'; href: string }> = []
  const children = parts.map((part) => {
    if (typeof part === 'string') return span(part)

    const markKey = `m${blockIndex}-${markDefs.length + 1}`
    markDefs.push({ _key: markKey, _type: 'link', href: part.href })
    return span(part.text, [markKey])
  })

  return {
    _key: `b${blockIndex}`,
    _type: 'block',
    children,
    markDefs,
    style,
  } as PortableTextBlock
}

const h2 = (text: string) => block('h2', [text])
const h3 = (text: string) => block('h3', [text])
const p = (...parts: BlockPart[]) => block('normal', parts)

export const flagshipArticles: Post[] = [
  {
    _id: 'flagship-muscle-loss-after-50',
    title: 'Why Muscle Loss Changes Everything After 50',
    slug: { current: 'why-muscle-loss-changes-everything-after-50' },
    publishedAt: '2026-05-06T09:00:00.000Z',
    excerpt:
      'Age-related muscle loss is not a side issue. It changes capacity, confidence, recovery, and the ordinary freedoms people want to keep.',
    author: 'StrongPath Editorial',
    category: 'Muscle Loss',
    tags: ['Sarcopenia', 'Muscle Loss', 'Strength After 50'],
    seoTitle: 'Why Muscle Loss Changes Everything After 50',
    seoDescription:
      'Age-related muscle loss changes strength, balance, recovery, and independence. What adults over 50 should understand first.',
    estimatedReadingMinutes: 8,
    sources: [
      {
        title: 'Age and muscle loss',
        publication: 'Harvard Health Publishing',
        href: 'https://www.health.harvard.edu/exercise-and-fitness/age-and-muscle-loss',
      },
      {
        title: 'Exercise and physical activity',
        publication: 'National Institute on Aging',
        href: 'https://www.nia.nih.gov/health/exercise-and-physical-activity',
      },
      {
        title: 'Progression models in resistance training for healthy adults',
        publication: 'American College of Sports Medicine',
        year: '2009',
        href: 'https://pubmed.ncbi.nlm.nih.gov/19204579/',
      },
      {
        title: 'Choosing the StrongPath: Reversing the Downward Spiral of Aging',
        publication: 'StrongPath credibility anchor',
        year: '2018',
        href: 'https://www.amazon.com/dp/1626344760?tag=stron02-20',
      },
    ],
    body: [
      p(
        'Most people do not notice muscle loss as muscle loss. They notice the consequences. The suitcase feels less cooperative. Stairs take more planning. A low chair becomes a small negotiation. A parent starts declining invitations because the day now has too many physical variables.'
      ),
      p(
        'That is why StrongPath begins here. The problem is not vague aging. It is the gradual loss of muscle, strength, and function that makes ordinary life feel narrower than it used to feel.'
      ),
      p(
        'The clinical word is sarcopenia. The more useful plain-English version is age-related muscle loss. Both point to the same reality: muscle is not decoration. Muscle is the tissue that lets a person stand, carry, climb, recover, travel, and remain in charge of daily life.'
      ),
      h2('Muscle is the operating system of capacity'),
      p(
        'Cardiovascular fitness matters. Blood pressure matters. Sleep, food, medication, and medical care all matter. But muscle has a special role because it sits under so many daily functions at once.'
      ),
      p(
        'When muscle and strength decline, the first losses are often practical. A person still looks like himself. She still lives independently. Nothing dramatic has happened. But the margin has changed. Tasks that used to be automatic now ask for more attention.'
      ),
      p(
        'That margin is what families often see before anyone names it. The adult child notices a parent taking fewer walks, avoiding stairs, or choosing the chair with arms. The parent may not describe it as weakness. He may describe it as being tired, being cautious, or not wanting to make a fuss.'
      ),
      h2('The research frame is serious'),
      p(
        'Harvard Health Publishing has written plainly about age and muscle loss, noting that adults who do not regularly do strength training can lose meaningful muscle over a decade and that strength training helps make everyday activities easier. That is not a motivational claim. It is a practical one. See ',
        {
          text: 'Harvard Health: Age and muscle loss',
          href: 'https://www.health.harvard.edu/exercise-and-fitness/age-and-muscle-loss',
        },
        '.'
      ),
      p(
        'The National Institute on Aging also treats strength, balance, flexibility, and endurance as core parts of exercise for older adults, not as athletic extras. That distinction matters. A person does not need to train like an athlete to take strength seriously. See ',
        {
          text: 'NIA: Exercise and physical activity',
          href: 'https://www.nia.nih.gov/health/exercise-and-physical-activity',
        },
        '.'
      ),
      p(
        'StrongPath is built on the research foundation behind ',
        {
          text: 'Choosing the StrongPath: Reversing the Downward Spiral of Aging',
          href: 'https://www.amazon.com/dp/1626344760?tag=stron02-20',
        },
        ', an Amazon bestseller in Aging, Weight Training, Exercise, and Longevity. The book gives the work its credibility anchor. Current research carries the specific claims we publish.'
      ),
      h2('The loss is physical, but the meaning is personal'),
      p(
        'The reason muscle loss changes everything after 50 is not that people suddenly become fragile. Many people in their 50s, 60s, and early 70s are working, traveling, caregiving, and living full lives. The issue is that the body starts charging more for the same tasks.'
      ),
      p(
        "A grocery bag is not just a grocery bag. It is the ability to shop without help. A staircase is not just a staircase. It is access to the bedroom, the train platform, the theater balcony, the second floor of a child's house. A walk around the neighborhood is not just exercise. It is participation."
      ),
      p(
        'This is why fear-based language misses the point. Adults do not need to be frightened into caring. They already care. They want to understand what is happening and what can still be done.'
      ),
      h2('Walking helps, but it does not solve the whole problem'),
      p(
        'Many adults were told for decades that walking was the answer. Walking is valuable. It supports cardiovascular health, mood, blood sugar, and routine. But walking does not reliably train the full strength system: hips, legs, back, shoulders, grip, and the ability to produce force when life asks for it.'
      ),
      p(
        'The American College of Sports Medicine has long distinguished resistance training from general activity because adaptation requires progression. In plain English: the body changes when the demand changes. See ',
        {
          text: 'ACSM progression models in resistance training',
          href: 'https://pubmed.ncbi.nlm.nih.gov/19204579/',
        },
        '.'
      ),
      p(
        'That does not mean everyone should start heavy. It means the plan has to be specific enough to work: start at the right level, learn the movement, add load gradually, recover, repeat.'
      ),
      h2('What to watch for'),
      p(
        'The early signs are often mundane: rising from a chair without using the arms gets harder; stairs become slower; carrying laundry or groceries requires more strategy; balance feels less automatic; recovery after illness takes longer; confidence shrinks before independence does.'
      ),
      p(
        'None of those signs is a diagnosis. They are reasons to pay attention. They are also reasons to avoid the two bad extremes: pretending nothing is changing, or assuming decline is already decided.'
      ),
      h2('The StrongPath position'),
      p(
        'Muscle loss after 50 deserves the same seriousness people already give to cholesterol, blood pressure, and bone density. Not because muscle is more important than everything else, but because strength is what turns health into usable life.'
      ),
      p(
        'The first step is not a purchase. It is a clearer frame: age-related muscle loss is measurable, consequential, and responsive to the right kind of training. That makes it worth studying. It also makes it worth acting on.'
      ),
      h2('Sources referenced'),
      p(
        'Harvard Health Publishing on age and muscle loss; National Institute on Aging exercise guidance; ACSM position stands on resistance training progression; current sarcopenia consensus literature on muscle mass, strength, and function.'
      ),
    ],
  },
  {
    _id: 'flagship-strength-crisis',
    title: 'The Strength Crisis Nobody Talks About',
    slug: { current: 'the-strength-crisis-nobody-talks-about' },
    publishedAt: '2026-05-06T09:10:00.000Z',
    excerpt:
      'Older adults are often told to stay active, but the more precise problem is loss of strength. That is the crisis hiding in plain sight.',
    author: 'StrongPath Editorial',
    category: 'Strength Training',
    tags: ['Strength Training', 'Resistance Training', 'Healthy Aging'],
    seoTitle: 'The Strength Crisis Nobody Talks About',
    seoDescription:
      'Why strength loss after 50 deserves serious attention, and why generic activity advice is not enough.',
    estimatedReadingMinutes: 8,
    sources: [
      {
        title: 'Quantity and quality of exercise for developing and maintaining fitness',
        publication: 'American College of Sports Medicine',
        year: '2011',
        href: 'https://pubmed.ncbi.nlm.nih.gov/21694556/',
      },
      {
        title: 'Exercise training and nutritional supplementation for physical frailty',
        publication: 'The New England Journal of Medicine',
        year: '1994',
        href: 'https://pubmed.ncbi.nlm.nih.gov/8179653/',
      },
      {
        title: 'Progression models in resistance training for healthy adults',
        publication: 'American College of Sports Medicine',
        year: '2009',
        href: 'https://pubmed.ncbi.nlm.nih.gov/19204579/',
      },
      {
        title: 'Strength and power training for older adults',
        publication: 'Harvard Health Publishing',
      },
    ],
    body: [
      p(
        'The public conversation about aging is crowded with advice. Walk more. Eat better. Sleep. Stay social. Keep moving. Much of that advice is directionally right. It is also incomplete.'
      ),
      p(
        'The crisis hiding underneath is strength. Not fitness aesthetics. Not athletic identity. Strength: the ability to produce force, control movement, recover from stress, and keep doing ordinary things without turning every day into a negotiation.'
      ),
      p(
        'When strength declines, people do not simply become less fit. They lose options. They stop taking certain trips. They avoid certain stairs. They become more cautious with grandchildren, luggage, showers, curbs, and winter sidewalks. Life gets smaller by inches.'
      ),
      h2('Activity is not the same thing as strength'),
      p(
        'A person can be active and still undertrained for strength. Walking, gardening, golf, yoga, swimming, and housework all have value. But the body adapts to the demands placed on it. If the demand never asks muscles to produce more force, strength may keep declining quietly.'
      ),
      p(
        'This is where generic advice fails. "Stay active" sounds reasonable, but it does not tell a 62-year-old woman what to do after her doctor says, "You should lift weights." It does not tell an adult child how to help a parent who is still independent but clearly losing capacity.'
      ),
      p(
        'The missing word is progression. Strength improves when the body is asked to do a little more over time, with enough recovery to adapt. That principle is not hype. It is the basis of resistance training.'
      ),
      h2('The evidence is not new'),
      p(
        'The American College of Sports Medicine recommends that most adults include resistance exercise for major muscle groups, alongside cardiorespiratory, flexibility, and neuromotor training. See ',
        {
          text: 'ACSM guidance on exercise quality and quantity',
          href: 'https://pubmed.ncbi.nlm.nih.gov/21694556/',
        },
        '.'
      ),
      p(
        'A landmark study by Fiatarone and colleagues in the New England Journal of Medicine showed that very old adults in supervised high-intensity strength training could make meaningful gains in strength and function. That study should not be used as a casual promise for every reader. It should be used as a serious corrective to the assumption that strength is only for younger bodies. See ',
        {
          text: 'Fiatarone et al., NEJM, 1994',
          href: 'https://pubmed.ncbi.nlm.nih.gov/8179653/',
        },
        '.'
      ),
      p(
        "StrongPath's job is to translate this kind of evidence without making it reckless. The point is not that everyone should train hard tomorrow. The point is that strength can be trained, and that caution should lead to a better plan, not to permanent avoidance."
      ),
      h2('Why families feel the crisis first'),
      p(
        'Adult children often notice strength loss before the parent wants to discuss it. The refrigerator is still full. The bills are paid. The parent is still capable. But there are small edits to daily life: fewer errands, less confidence outside the house, more fatigue after ordinary tasks.'
      ),
      p(
        'The right response is not panic. It is respect plus specificity. The parent deserves dignity. The family deserves a credible explanation. Both deserve guidance that does not make the problem feel larger than the person.'
      ),
      p(
        'A strength plan can become a way to protect good days: getting out of the house more easily, carrying what needs to be carried, visiting family with less hesitation, recovering from illness with more reserve.'
      ),
      h2('Why the crisis stays invisible'),
      p(
        'Strength loss is easy to miss because it is rarely the reason for the appointment. Blood pressure has a number. Cholesterol has a number. A fall has an event. Strength loss often shows up as a story: "I\'m just more careful now," or "I don\'t do that anymore."'
      ),
      p(
        'Those stories matter. They are often the first public evidence of a private decline in margin. By the time strength loss becomes an obvious crisis, the family may already be dealing with falls, hospitalization, physical therapy, or a move no one wanted.'
      ),
      h2('A better public message'),
      p(
        'The better message is simple: strength is health infrastructure. It supports balance, independence, metabolic function, bone loading, recovery, and participation. It deserves a place in the center of the aging conversation.'
      ),
      p(
        'That does not require bright promises or aggressive marketing. It requires a calmer standard: cite the evidence, name the mechanism, respect the reader, and give people a path they can begin carefully.'
      ),
      h2('What StrongPath will keep publishing'),
      p(
        'StrongPath will keep building from this foundation: what sarcopenia is, why resistance training matters, how protein and recovery support adaptation, how to help aging parents begin, and how to evaluate claims without getting pulled into wellness noise.'
      ),
      p(
        'The crisis is real. It is also workable. That combination is the reason to take strength seriously now.'
      ),
      h2('Sources referenced'),
      p(
        'ACSM exercise guidance; ACSM resistance-training progression models; Fiatarone et al. on strength training in very old adults; Harvard Health Publishing on strength and power training for older adults.'
      ),
    ],
  },
  {
    _id: 'flagship-healthy-aging-predictors',
    title: 'What Actually Predicts Healthy Aging?',
    slug: { current: 'what-actually-predicts-healthy-aging' },
    publishedAt: '2026-05-06T09:20:00.000Z',
    excerpt:
      'Healthy aging is not best understood through vague aspiration. Physical function, gait speed, grip strength, and capacity tell a more useful story.',
    author: 'StrongPath Editorial',
    category: 'Research',
    tags: ['Healthy Aging', 'Gait Speed', 'Grip Strength', 'Research'],
    seoTitle: 'What Actually Predicts Healthy Aging?',
    seoDescription:
      'Gait speed, grip strength, muscle, and function are practical predictors of healthy aging. Here is why they matter.',
    estimatedReadingMinutes: 9,
    sources: [
      {
        title: 'Gait speed and survival in older adults',
        publication: 'JAMA',
        year: '2011',
        href: 'https://jamanetwork.com/journals/jama/fullarticle/644554',
      },
      {
        title: 'Prognostic value of grip strength',
        publication: 'The Lancet',
        year: '2015',
        href: 'https://pubmed.ncbi.nlm.nih.gov/25982160/',
      },
      {
        title: 'Exercise and physical activity',
        publication: 'National Institute on Aging',
        href: 'https://www.nia.nih.gov/health/exercise-and-physical-activity',
      },
      {
        title: 'Current consensus literature on sarcopenia, muscle strength, and function',
        publication: 'Peer-reviewed clinical research',
      },
    ],
    body: [
      p(
        'Healthy aging is often described in vague language. Vitality. Longevity. Staying young. Aging well. The words are familiar, but they do not help much when a person is deciding what to do on Tuesday morning.'
      ),
      p(
        'A better question is more concrete: what predicts whether a person can keep living with capacity? What signals tell us that the body still has margin?'
      ),
      p(
        'The research points toward physical function. Not as the only thing that matters, but as one of the clearest windows into how the body is holding up. How fast a person walks. How strongly a person grips. Whether rising from a chair is easy or costly. Whether balance and strength are still available when life asks for them.'
      ),
      h2('Gait speed is a serious signal'),
      p(
        'Gait speed sounds ordinary. It is not. In a pooled analysis published in JAMA, Studenski and colleagues examined gait speed and survival in older adults across multiple cohort studies. The central finding was not that walking speed is magic. It was that usual walking speed was meaningfully associated with survival and helped describe health status in a way age alone could not. See ',
        {
          text: 'Studenski et al., JAMA, 2011',
          href: 'https://jamanetwork.com/journals/jama/fullarticle/644554',
        },
        '.'
      ),
      p(
        'This makes intuitive sense. Walking speed is not just about legs. It reflects muscle, balance, nervous-system coordination, cardiovascular reserve, confidence, pain, cognition, and the ability to organize movement. A slower gait can be a signal that several systems are carrying less margin.'
      ),
      p(
        'For StrongPath, the lesson is not that everyone should obsess over a number. The lesson is that function deserves respect. The way a person moves through the world tells us something important.'
      ),
      h2('Grip strength is another window'),
      p(
        'Grip strength is simple to measure and surprisingly informative. The PURE study, published in The Lancet, found grip strength to be associated with mortality and cardiovascular outcomes across a large international cohort. See ',
        {
          text: 'Leong et al., The Lancet, 2015',
          href: 'https://pubmed.ncbi.nlm.nih.gov/25982160/',
        },
        '.'
      ),
      p(
        "Grip strength is not only about hands. It often stands in for broader neuromuscular function. A strong grip does not guarantee healthy aging, and a weak grip does not determine a person's future. But it can be one useful signal in a larger picture."
      ),
      h2('Muscle connects the signals'),
      p(
        "Gait speed, grip strength, chair-rise ability, balance, and recovery are different measures, but they share a substrate: muscle and the nervous system's ability to use it. That is why age-related muscle loss matters beyond appearance."
      ),
      p(
        'Muscle helps store glucose. It supports joints. It gives the body reserve during illness. It helps a person catch herself when a foot catches a rug. It gives ordinary life more room.'
      ),
      p(
        'The question is not whether muscle is the only predictor of healthy aging. It is not. The question is whether strength is one of the few predictors people can meaningfully train. It is.'
      ),
      h2('The predictor people can act on'),
      p(
        'Some predictors of aging are difficult to change. Family history matters. Past injuries matter. Diagnoses matter. Luck matters more than most health writing admits.'
      ),
      p(
        "Strength is different. It is not fully under personal control, and StrongPath will not pretend otherwise. But it is trainable. Resistance training, adequate protein, recovery, and consistency can improve the body's capacity to produce force and tolerate daily demands."
      ),
      p(
        'That is why strength belongs near the center of a serious healthy-aging strategy. It is both measurable and actionable.'
      ),
      h2('What this means for adults over 50'),
      p(
        'If you are noticing decline, start by naming the right problem. Not "I am getting old." Not "this is just what happens." A more useful frame is: "I may be losing strength, and strength can be trained."'
      ),
      p(
        'If you are helping a parent, the same frame applies with extra care. The goal is not to confront them with decline. The goal is to protect capacity and good days in a way that respects their dignity.'
      ),
      p(
        'If you are a clinician evaluating StrongPath, the standard is citation discipline. Claims should connect to current research and named sources. Where the evidence is uncertain, the language should say so.'
      ),
      h2('A better definition of healthy aging'),
      p(
        'Healthy aging is not a promise to avoid illness or stay unchanged. It is the work of preserving as much usable life as possible: movement, confidence, recovery, participation, and independence.'
      ),
      p(
        'That is why StrongPath focuses on strength. It is not the whole answer. It is one of the most practical places to begin.'
      ),
      h2('Sources referenced'),
      p(
        'Studenski et al., JAMA 2011 on gait speed and survival; Leong et al., The Lancet 2015 on grip strength; National Institute on Aging functional assessment resources; current sarcopenia consensus literature on muscle strength and function.'
      ),
    ],
  },
]

export const featuredFlagshipArticles = flagshipArticles

export function findFlagshipArticle(slug: string) {
  return flagshipArticles.find((article) => article.slug.current === slug) || null
}

export function mergePublishedPosts(posts: Post[]) {
  const flagshipSlugs = new Set(flagshipArticles.map((article) => article.slug.current))
  const externalPosts = posts.filter((post) => !flagshipSlugs.has(post.slug.current))

  return [...flagshipArticles, ...externalPosts].sort((a, b) => {
    const aTime = new Date(a.publishedAt || 0).getTime()
    const bTime = new Date(b.publishedAt || 0).getTime()
    return bTime - aTime
  })
}
