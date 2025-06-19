import Link from "next/link";

export default function Hero() {
    return (
        <section data-class="hero" className="text-center px-8 py-16 bg-[#fff5e5]">
            <h2 className="text-[2.2rem] mb-4">기술로 세상을 바꾸는 이야기</h2>
            <p className="text-[1.1rem] text-[#666] mb-8">개발자의 성장을 위한 기술 블로그, Dev Insight</p>
            <Link href="#recent-posts"
                  className="inline-block text-[white] no-underline font-[bold] px-6 py-3 rounded-[5px] bg-[var(--primary)]">최신
                글 보기</Link>
        </section>
    )
}