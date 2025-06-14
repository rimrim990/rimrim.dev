import {cn} from "@/lib/utils";
import {ComponentProps} from "react";

export default function Pagination() {
    return (
        <div className="text-center mt-8">
            <PaginationButton href="#" className="page">1</PaginationButton>
            <PaginationButton href="#" className="page">2</PaginationButton>
            <PaginationButton href="#" className="page">3</PaginationButton>
            <span className="dots">...</span>
            <PaginationNext href="#" className="page next">Next →</PaginationNext>
        </div>
    )
}


function PaginationButton({className, ...props}: ComponentProps<'a'>) {
    return (
        <a className={cn('inline-block rounded border text-[#333] text-[0.95rem] no-underline transition-[background] duration-[0.2s] mx-[0.3rem] my-0 px-[0.8rem] py-2 border-solid border-[#ddd] bg-white hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary-color)]', className)} {...props} />
    )
}

function PaginationEllipsis({className, ...props}: ComponentProps<'span'>) {
    return (
        <span
            className={cn('inline-block rounded border text-[#333] text-[0.95rem] no-underline transition-[background] duration-[0.2s] mx-[0.3rem] my-0 px-[0.8rem] py-2 border-solid border-[#ddd] bg-white hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary-color)]', className)} {...props} />
    )
}

function PaginationNext({className, ...props}: ComponentProps<'a'>) {
    return (
        <a className={cn('inline-block rounded border text-[#333] text-[0.95rem] no-underline transition-[background] duration-[0.2s] mx-[0.3rem] my-0 px-[0.8rem] py-2 border-solid border-[#ddd] bg-white hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary-color)]', className)} {...props} />
    )
}