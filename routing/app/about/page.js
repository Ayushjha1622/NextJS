import Link from "next/link";

export const metadata = {
  title: "About "
}


export default function about() {
  return (
    <>welcome to about page.
    <Link href="/services">services Page</Link>
    </>
  );
}
