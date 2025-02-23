import { error } from "console";
import { notFound, redirect } from "next/navigation";
import { throwDeprecation } from "process";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("error loading review");
    }
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        redirect("/products");
        // notFound();
    }
    return (
        <h1>
            Review by {reviewId} on {productId}
        </h1>
    );
}
