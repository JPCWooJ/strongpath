import Link from 'next/link'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`} className="group block">
                <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
                {post.publishedAt && (
                  <time className="text-sm text-gray-500 mt-1 block">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
                {post.excerpt && (
                  <p className="mt-2 text-gray-700 leading-relaxed">{post.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
