import { Post } from '@/types'
import PostItem from '@/app/Post'
import Title from '@/components/Title'

interface Props {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <div>
      <Title>Posts</Title>
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
