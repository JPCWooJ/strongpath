import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client, postQuery, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(postsQuery)
  return posts.map((post) => ({ slug: post.slug.current }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await client.fetch(postQuery, { slug: params.slug })

  if (!post) notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.publishedAt && (
        <time className="text-sm text-gray-500 block mb-10">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      )}
      {post.body && (
        <div className="space-y-4 text-base leading-relaxed text-gray-800">
          <PortableText value={post.body} />
        </div>
      )}
    </main>
  )
}
