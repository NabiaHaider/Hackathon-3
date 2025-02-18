'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import ProductDetail from '@/app/product/[id]/ProductDetail';

type Product = {
  name: string;
  id: string;
  price: number;
  description: string;
  category: string;
  stockLevel: number;
  image: string;
  discountPercentage: number;
  isFeatureProduct: boolean;
};

const Page = () => {
  const { id } = useParams(); // Get `id` from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Wait until `id` is available
    console.log("Fetched ID from URL:", id); // Debugging

    const fetchProduct = async () => {
      try {
        const query = `*[ _type == "product" && _id == $id]{
          name,
          "id": _id,
          price,
          description,
          category,
          stockLevel,
          "image": image.asset._ref
        }[0]`;

        const productData: Product | null = await client.fetch(query, { id });

        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductDetail product={product} />
      </div>
    </div>
  );
};

export default Page;
