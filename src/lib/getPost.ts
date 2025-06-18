import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMetadata {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
}

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog')

export function getPostMetadata(): PostMetadata[] {
  const files = fs.readdirSync(POSTS_PATH)

  const metadata = files.map((filename) => {
    const fileContents = fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8')
    const { data } = matter(fileContents)
    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: data.slug,
      tags: data.tags || [],
    }
  })

  return metadata.sort((a, b) => b.date.localeCompare(a.date))
}