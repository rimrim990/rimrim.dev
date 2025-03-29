import dynamic from "next/dynamic";

interface Props {
    params: Promise<{ id: string }>
}

export default async function Post({params}: Props) {
    const { id } = await params

    const MdxModule = dynamic(
        () => import((`../../../markdown/${id}.mdx`))
    )

    return <MdxModule />
}