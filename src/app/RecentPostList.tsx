import { Post } from '@/types'
import PostItem from '@/app/Post'

interface Props {
  posts: Post[]
}

export default function RecentPostList({ posts }: Props) {
  return (
    <div className="my-20">
      <h3 className="text-3xl font-bold my-4">Recent Posts</h3>
      <ul className="flex" style={{ gap: '4rem' }}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
