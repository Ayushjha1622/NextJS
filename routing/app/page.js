import Link from "next/link";
import Component from "../_components/test";
import ComponentPage from "../_components/page";

export const metadata = {
  title: "Home | Technical Agency"
}


export default function Home() {
  return (
    <>
    <h1>Technical Agency</h1>
    <ComponentPage/>
    <p><Link href="/about">about page</Link></p>
    <p><Link href="/services">services page</Link></p>
    <p><Link href="/files">files page</Link></p>
    <p><Link href="/blogs">blogs page</Link></p>
     
     
     
     
    </>

  );
}
