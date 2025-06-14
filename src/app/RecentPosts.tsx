import Post from "@/app/Post";

export default function RecentPosts() {
    return (
        <section id="recent-posts" data-class="posts"
                 className="bg-[#f9f9f9] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 px-8 py-12">
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}