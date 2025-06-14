import {ComponentProps} from "react";
import {cn} from "@/lib/utils";

export default function Category() {
    return (
        <nav data-class="category-nav" aria-labelledby="category-heading"
             className="flex-1 h-fit sticky p-6 rounded-lg border-[#eee] md:border-l border-t md:border-t-0 border-solid top-8 bg-[#fafafa]"
        >
            <h2 id="category-heading" className="text-[1.2rem] text-[#444] mb-4">카테고리</h2>
            <div data-class="category-tags" className="flex flex-wrap gap-2">
                <CategoryTag>#프론트엔드</CategoryTag>
                <CategoryTag>#백엔드</CategoryTag>
                <CategoryTag>#DevOps</CategoryTag>
                <CategoryTag>#컬쳐</CategoryTag>
                <CategoryTag>#인터뷰</CategoryTag>
            </div>
        </nav>
    )
}

function CategoryTag({className, ...props}: ComponentProps<'a'>) {
    return <a
        className={cn('bg-[#fff] inline-block text-[#333] border no-underline text-[0.9rem] transition-all duration-[0.2s] ease-[ease] px-4 py-2 rounded-[20px] border-solid border-[#ddd] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]', className)} {...props} />
}