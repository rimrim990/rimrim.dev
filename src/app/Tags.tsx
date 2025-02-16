interface Props {
  tags: string[]
}

export default async function Tags({ tags }: Props) {
  return (
    <div className="my-20">
      <h3 className="text-3xl font-bold my-4">Tags</h3>
      <ul className="flex flex-wrap justify-start gap-3 mt-10">
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
