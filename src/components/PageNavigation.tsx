import {ComponentProps} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function PageNavigation() {
    return (
        <nav className="mt-10 flex justify-between text-sm text-orange-600 font-medium">
            <PageNavigationItem href="#" className="hover:underline">← 이전 글</PageNavigationItem>
            <PageNavigationItem href="#" className="hover:underline">다음 글 →</PageNavigationItem>
        </nav>
    )
}

function PageNavigationItem({className, href, children}: ComponentProps<typeof Link>) {
    return (
        <Link href={href} className={cn("hover:underline", className)}>{children}</Link>
    )
}