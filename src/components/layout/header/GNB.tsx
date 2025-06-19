import {ComponentProps} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function GNB() {
    return (
        <Navigation>
            <NavigationItem href="/" className="">홈</NavigationItem>
            <NavigationItem href="#">프론트엔드</NavigationItem>
            <NavigationItem href="#">백엔드</NavigationItem>
            <NavigationItem href="#">컬처</NavigationItem>
        </Navigation>
    )
}

function Navigation({...props}: ComponentProps<'nav'>) {
    return <nav {...props} />
}

function NavigationItem({className, children, href}: ComponentProps<typeof Link>) {
    return <Link href={href} className={cn('no-underline font-medium ml-6 text-white ', className)}>{children}</Link>
}
