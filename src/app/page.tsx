import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import Posts from "@/components/Posts";
import Sidebar from "@/components/layout/sidebar";

export default function Home() {
    return (
        <main className="flex gap-8 p-8 flex-col md:flex-row">
            <section data-class="content" className="flex-[3]">
                <Hero/>
                <RecentPosts/>
                <Posts/>
            </section>
            <Sidebar/>
        </main>
    )
}
