import { prisma } from "../../lib/prisma";
import Link from "next/link";
export default async function SingleProduct({ params }) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <img
        className="w-full h-96 object-cover rounded-xl"
        src={product?.image}
        alt={product?.name}
      />
      <h1 className="text-3xl font-bold text-gray-900 mt-4">{product?.name}</h1>
      <p className="text-lg text-gray-600 mt-2">${product?.price}</p>
      <Link href={"/products"}>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Back
        </button>
      </Link>
    </div>
  );
}
