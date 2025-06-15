import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-bold leading-[1.4] mt-10 mb-4 text-[2rem] text-[var(--primary)] border-b-[var(--primary)] pb-[0.4rem] border-b-2 border-solid">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold leading-[1.4] mt-10 mb-4 text-2xl text-[var(--primary)] border-l-[var(--secondary)] pl-3 border-l-4 border-solid">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold leading-[1.4] mt-10 mb-4 text-xl text-[#444]">{children}</h3>,

    p: ({ children }) => <p className="text-[#444] mx-0 my-4">{children}</p>,
    a: ({ children }) => <a className="text-[var(--primary)] underline font-medium hover:text-[var(--secondary)]">{children}</a>,

    ul: ({ children }) => <ul className="mx-0 my-4 pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="mx-0 my-4 pl-6">{children}</ol>,
    li: ({ children }) => <li className="mb-2 marker:text-[var(--primary)]">{children}</li>,

    blockquote: ({ children }) => <blockquote className="border-l-[var(--primary)] italic text-[#555] mx-0 my-8 pl-4 border-l-4 border-solid bg-[#fff7f1]">{children}</blockquote>,
    code: ({ children }) => <code className="rounded text-[0.9rem] text-[var(--primary)] px-2 py-[0.2rem] bg-[#f4f4f4]">{children}</code>,
    pre: ({ children }) => <pre className="text-[#f8f8f2] overflow-x-auto text-[0.9rem] mx-0 my-8 p-4 rounded-lg bg-[#1e1e1e] [&_code]:text-inherit [&_code]:p-0 [&_code]:bg-none">{children}</pre>,
    ...components,
  }
}
