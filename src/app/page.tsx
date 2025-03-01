import { posts } from '@/data/dummy'
import PostList from '@/app/PostList'
import Tags from '@/components/Tags'

export default function Home() {
  const tags = posts.map((post) => post.tag)

  return (
    <div className="flex flex-row justify-center">
      <PostList posts={posts} />
      <div className="px-6 w-[300px]">
        <Tags tags={tags} />
      </div>
    </div>
  )
}
