import {ComponentProps} from "react";
import {cn} from "@/lib/utils";

export default function Tags() {
    return (
        <div className="mt-6 space-x-2">
            <a href="#"
               className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition">#React</a>
            <a href="#"
               className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition">#성능</a>
            <Tag>#React</Tag>
            <Tag>#성능</Tag>
            <Tag>#렌더링</Tag>
        </div>
    )
}

function Tag({ className, ...props}: ComponentProps<'a'>) {
    return (
        <a href="#"
           className={cn("inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition", className)}
           {...props}
        />
    )
}