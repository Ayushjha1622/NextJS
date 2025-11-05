import  Link  from "next/link";

export default function Services() {
    return (
        <>
            <h1>All Services</h1>
            <p>
            <Link href="/services/web-dev">web dev</Link>

            </p>
            <p>
            <Link href="/services/design">App/web design</Link>

            </p>
            <p>
            <Link href="/services/seo">SEO</Link>

            </p>
            
        </>
        
    );
}