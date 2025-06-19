import {cn} from "@/lib/utils";
import {ComponentProps} from "react";
import Link from "next/link";

export default function Pagination() {
    return (
        <div className="text-center mt-8">
            <PaginationButton href="#" className="page">1</PaginationButton>
            <PaginationButton href="#" className="page">2</PaginationButton>
            <PaginationButton href="#" className="page">3</PaginationButton>
            <PaginationEllipsis/>
            <PaginationNext href="#" className="page next">Next →</PaginationNext>
        </div>
    )
}


function PaginationButton({className, href, children}: ComponentProps<typeof Link>) {
    return (
        <Link href={href}
              className={cn('inline-block rounded border text-[#333] text-[0.95rem] no-underline transition-[background] duration-[0.2s] mx-[0.3rem] my-0 px-[0.8rem] py-2 border-solid border-[#ddd] bg-white hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary-color)]', className)}>{children}</Link>
    )
}

function PaginationEllipsis(props: ComponentProps<'span'>) {
    return (
        <span {...props}>...</span>
    )
}

function PaginationNext({className, href, children}: ComponentProps<typeof Link>) {
    return (
        <Link
            href={href}
            className={cn('inline-block rounded border text-[#333] text-[0.95rem] no-underline transition-[background] duration-[0.2s] mx-[0.3rem] my-0 px-[0.8rem] py-2 border-solid border-[#ddd] bg-white hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary-color)]', className)}>
            {children}
        </Link>
    )
}