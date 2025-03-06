import { prisma } from "../lib/prisma";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white p-4"
          >
            <img
              className="w-full h-48 object-cover rounded-xl"
              src={product.image}
              alt={product.name}
            />
            <div className="py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-lg text-gray-600 mt-2">${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
