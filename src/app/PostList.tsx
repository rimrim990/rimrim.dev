import { Post } from '@/types'
import PostItem from '@/app/Post'

interface Props {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="max-w-3xl px-6 border-r">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
