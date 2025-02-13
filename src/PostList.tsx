import {Post} from "@/types";
import PostItem from "@/app/Post";

interface Props {
    posts: Post[]
}

export default function PostList({posts}: Props) {
    return (
        <ul className="grid grid-cols-3 gap-16" style={{gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem'}}>
            {
                posts.map((post) => (<PostItem post={post}/>))
            }
        </ul>
    )
}