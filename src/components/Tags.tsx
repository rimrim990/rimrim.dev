interface Props {
  tags: string[]
}

export default function Tags({ tags }: Props) {
  return (
    <div>
      <span className="text-[#6b7684] size-3 text-sm font-bold">태그</span>
      <div className="py-3">
        {tags.map((tag) => (
          <div
            className="cursor-pointer bg-gray-100 text-gray-600 rounded-2xl px-3 py-2 text-xs text-center mr-2 inline-block mb-2"
            key={tag}
          >
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
