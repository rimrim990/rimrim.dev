import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Category from "@/components/layout/sidebar/Category";
import Post from "@/components/Post";
import RecentPosts from "@/components/RecentPosts";
import Posts from "@/components/Posts";

export default function Home() {
    return (
        <section data-class="content" className="flex-[3]">
            <Hero/>
            <RecentPosts />
            <Posts />
        </section>
    )
}
