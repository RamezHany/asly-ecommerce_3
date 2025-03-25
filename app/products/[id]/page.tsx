import { mockProducts } from "@/lib/mock-data"
import ProductDetail from "./product-detail"

// Generate static paths for all products during build
export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // Find product by ID from mock data
  const product = mockProducts.find((p) => p.id === params.id) || mockProducts[0]
  
  return <ProductDetail product={product} />
}

