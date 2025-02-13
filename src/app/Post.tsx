import {Post} from "@/types";
import Image from "next/image";

interface Props {
    post: Post
}

export default function PostItem({post}: Props) {
    return (<li>
        <a>
            <div className="flex border-solid bolrder-1 rounded-md max-h-52">
                <img src='https://dummyimage.com/600x400/61bf85/fff' alt='dummy image' className="w-full object-cover"/>
            </div>
            <div className="text-blue-400 my-2">
                <span>{post.tag}</span>
            </div>
            <h4 className="text-xl font-bold line-clamp-2">{post.title}</h4>
            <dl className="text-gray-400 mt-2 text-sm">
                <dt className="sr-only">작성일</dt>
                <dd>{post.createdAt.toLocaleDateString('en-CA')}</dd>
            </dl>
        </a>
    </li>)
}