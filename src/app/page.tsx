import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Category from "@/components/Category";
import Post from "@/app/Post";
import RecentPosts from "@/app/RecentPosts";

export default function Home() {
    return (
        <section data-class="content" className="flex-[3]">
            <Hero/>
            <RecentPosts />

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
        </section>
    )
}
