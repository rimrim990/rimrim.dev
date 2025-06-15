import type {NextConfig} from 'next'
import createMDX from '@next/mdx'

import rehypeHighlight from "rehype-highlight";
import langJs from 'highlight.js/lib/languages/javascript'


const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        rehypePlugins: [
            [rehypeHighlight, {
                languages: {
                    javascript: langJs
                }
            }]
        ]
    }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
