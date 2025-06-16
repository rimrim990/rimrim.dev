import type {MDXComponents} from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({children}) => <h1
            className="mt-10 mb-4">{children}</h1>,
        h2: ({children}) => <h2
            className="mt-10 mb-4">{children}</h2>,
        h3: ({children}) => <h3 className="font-bold leading-[1.4] mt-10 mb-4 text-xl text-[#444]">{children}</h3>,

        p: ({children}) => <p className="text-[#444] mx-0 my-4">{children}</p>,
        a: ({children}) => <a className="hover:text-[var(--secondary)]">{children}</a>,

        ul: ({children}) => <ul className="mx-0 my-4 pl-6">{children}</ul>,
        ol: ({children}) => <ol className="mx-0 my-4 pl-6">{children}</ol>,
        li: ({children}) => <li className="mb-2">{children}</li>,

        blockquote: ({children}) => <blockquote
            className="text-[#555] mx-0 my-8">{children}</blockquote>,
        code: ({children}) => <code
            className="hljs rounded text-[0.9rem] text-[var(--primary)] px-2 py-[0.2rem] bg-[#f4f4f4]">{children}</code>,
        pre: ({children}) => <pre
            className="text-[#f8f8f2] overflow-x-auto text-[0.9rem] mx-0 my-8 p-4 rounded-lg bg-[#1e1e1e] [&_code]:text-inherit [&_code]:p-0 [&_code]:bg-none">{children}</pre>,
        ...components,
    }
}
