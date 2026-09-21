import ProductGallery from "@/components/product/ProductGallery";
import { getProductBySlug } from "@/sanity/queries";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <ProductGallery images={product.images} />

      {/* Product Info Section */}
      <div className="mt-10 space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
