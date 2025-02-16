import { posts } from '@/data/dummy'
import PostList from '@/app/PostList'
import RecentPostList from '@/app/RecentPostList'
import Tags from '@/app/Tags'

const RECENT_ITEM_COUNT = 1

export default function Home() {
  const recent = posts.slice(0, RECENT_ITEM_COUNT)
  const rest = posts.slice(RECENT_ITEM_COUNT)
  const tags = posts.map((post) => post.tag)

  return (
    <main className="px-12">
      <Tags tags={tags} />
      <RecentPostList posts={recent} />
      <PostList posts={rest} />
    </main>
  )
}
