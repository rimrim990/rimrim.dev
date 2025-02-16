import Title from '@/components/Title'

interface Props {
  tags: string[]
}

export default async function Tags({ tags }: Props) {
  return (
    <div>
      <Title>Tags</Title>
      <ul className="flex flex-wrap justify-start gap-3">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} />
        ))}
      </ul>
    </div>
  )
}

function TagItem({ tag }: { tag: string }) {
  return (
    <li className="h-9 text-blue-400 border border-blue-400 border-solid rounded-3xl">
      <a className="py-1 px-3 block" href={`/posts/tags/${tag}`}>
        {tag}
      </a>
    </li>
  )
}
