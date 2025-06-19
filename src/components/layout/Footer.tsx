import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-white text-center p-8 bg-[#333]">
            <p>Contact: devinsight@example.com | GitHub: <Link href="https://github.com/devinsight"
                                                            className="text-[#ffa64d] no-underline">devinsight</Link></p>
        </footer>
    )
}