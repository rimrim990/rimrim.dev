import { PropsWithChildren } from 'react'

const overrideComponents = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 style={{ color: 'blue', fontSize: '32px' }}>{children}</h1>
  ),
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/markdown/${slug}.mdx`)

  return <Post components={overrideComponents} />
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false
