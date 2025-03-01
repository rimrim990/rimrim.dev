import { Post } from '@/types'

interface Props {
  post: Post
}

export default function PostItem({ post }: Props) {
  return (
    <li>
      <a href={`/posts/${post.id}`} className="flex flex-row py-5">
        <div className="flex flex-col mr-4 w-4/5">
          <h5 className="text-lg font-bold line-clamp-2 text-[#191f28] mb-2">{post.title}</h5>
          <p className="text-[#4e5968] mb-3">{post.subTitle}</p>
          <dl className="mt-2 text-sm text-[#4e5968]">
            <dt className="sr-only">작성일</dt>
            <dd>
              {post.createdAt.toLocaleDateString('en-CA')} · {post.tag}
            </dd>
          </dl>
        </div>
        <div className="bg-amber-200 w-36 rounded-xl mb-auto overflow-hidden">
          <img
            src="https://dummyimage.com/600x400/61bf85/fff"
            alt="dummy image"
            className="w-100 object-cover"
          />
        </div>
      </a>
    </li>
  )
}
