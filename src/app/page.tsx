import { posts } from '@/data/dummy'
import PostList from '@/app/PostList'
import RecentPostList from '@/app/RecentPostList'

const RECENT_ITEM_COUNT = 1

export default function Home() {
  const recent = posts.slice(0, RECENT_ITEM_COUNT)
  const rest = posts.slice(RECENT_ITEM_COUNT)

  return (
    <main className="px-12">
      <RecentPostList posts={recent} />
      <PostList posts={rest} />
    </main>
  )
}
