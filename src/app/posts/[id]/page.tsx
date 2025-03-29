import dynamic from "next/dynamic";
import { promises as fs } from 'fs'
import path from "path";

interface Props {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    const postIds = await fs.readdir(path.join(process.cwd(), 'src', 'markdown'))
    return postIds.map(id => ({
        id
    }))
}

export default async function Post({params}: Props) {
    const { id } = await params

    const MdxModule = dynamic(
        () => import((`../../../markdown/${id}.mdx`))
    )

    return <MdxModule />
}