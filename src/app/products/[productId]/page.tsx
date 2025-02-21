import { Metadata } from "next";

type props = {
    params: Promise<{ productId: String }>;
};

export const generateMetadata = async ({
    params,
}: props): Promise<Metadata> => {
    const id = (await params).productId;
    const title=await new Promise((resolve)=>{setTimeout(()=>{
        resolve(`iphone ${id}`)
    })})
    return { title: `Product ${title}` };
};
export default async function ProductDetails({ params }: props) {
    const productId = (await params).productId;
    return <h1>Details about Product {productId}</h1>;
}
