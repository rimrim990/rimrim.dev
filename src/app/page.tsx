import {posts} from "@/data/dummy";
import PostList from "@/PostList";

export default function Home() {
    return (
        <main className="px-12">
            <h3 className="text-3xl font-bold my-4">Posts</h3>
            <PostList posts={posts}/>
        </main>
    )
}
