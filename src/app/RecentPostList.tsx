import { Post } from '@/types'
import PostItem from '@/app/Post'
import Title from '@/components/Title'

interface Props {
  posts: Post[]
}

export default function RecentPostList({ posts }: Props) {
  return (
    <div>
      <Title>Recent Posts</Title>
      <ul className="flex" style={{ gap: '4rem' }}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
