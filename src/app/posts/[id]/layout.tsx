import Tags from "@/components/Tags";
import React from "react";
import PageNavigation from "@/components/PageNavigation";

export default function Layout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="max-w-5xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
            <article className="flex-[3]">
                <h2 className="text-3xl font-bold mb-2">React에서 성능 최적화를 위한 실전 팁</h2>
                <div className="text-sm text-gray-500 mb-6">
                    작성일: 2025.06.14 | 카테고리: 프론트엔드
                </div>
                <Tags/>

                <div className="prose max-w-none mt-6">
                    {children}
                </div>

                <PageNavigation/>
            </article>
        </main>
    )
}