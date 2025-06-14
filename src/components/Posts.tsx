import Pagination from "@/components/Pagination";
import Post from "@/components/Post";

export default function Posts() {
    return (
        <section data-class="post-listing" className="px-8 py-12 bg-[#f9f9f9]">
            <h2>전체 포스트</h2>
            <div data-class="posts"
                 className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Pagination/>
        </section>
    )
}
