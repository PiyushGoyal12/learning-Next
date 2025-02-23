function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("error loading product");
    }
    // error.tsx will not handel error from layout file
    // to resolve we need to move error.tsx in parent folder
    return (
        <>
            {children}
            <h2>Featured Products </h2>
        </>
    );
}
