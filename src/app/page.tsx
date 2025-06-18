import Link from 'next/link'
import { getPostMetadata } from '../lib/getPost'

export default function HomePage() {
  const posts = getPostMetadata()

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📚 Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={/blog/${post.slug}}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}