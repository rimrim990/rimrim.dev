import {ComponentProps} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function Tags() {
    return (
        <div className="mt-6 space-x-2">
            <Link href="#"
               className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition">#React</Link>
            <Link href="#"
               className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition">#성능</Link>
            <Tag href="#">#React</Tag>
            <Tag href="#">#성능</Tag>
            <Tag href="#">#렌더링</Tag>
        </div>
    )
}

function Tag({ className, href, children}: ComponentProps<typeof Link>) {
    return (
        <Link href={href}
           className={cn("inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition", className)}
        >
            {children}
        </Link>
    )
}