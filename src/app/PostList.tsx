import { Post } from '@/types'
import PostItem from '@/app/Post'

interface Props {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="my-20">
      <h3 className="text-3xl font-bold my-4">Posts</h3>
      <ul
        className="grid grid-cols-3 gap-16"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
