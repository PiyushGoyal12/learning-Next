import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Hello</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">products</Link>
            <Link href="/articles/breaking-news-123?lang-en">
                read in English
            </Link>
            <Link href="/articles/breaking-news-123?lang-fr">
                read in French
            </Link>
        </>
    );
}
