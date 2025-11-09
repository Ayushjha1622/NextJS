export const metadata = {
    title: {
        absolute: "My files"
    },
}

export default async function Files({params}) {
    const {filepath} = await params;
    return (
        <h1>
            File <i>{filepath?.join("/")}
            </i>
        </h1>
    );
}