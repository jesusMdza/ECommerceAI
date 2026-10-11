import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import type { ColorOption, Product } from './ProductCard'

type ProductPageProps = {
  products: Product[]
}

export default function ProductPage({ products }: ProductPageProps) {
  const { productId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <main id="top" className="product-not-found">
        <p className="eyebrow">PRODUCT NOT FOUND</p>
        <h1>This pick isn’t here.</h1>
        <Link className="product-back-link" to="/#collection">
          <span aria-hidden="true">←</span> Back to collection
        </Link>
      </main>
    )
  }

  const colorName = searchParams.get('color')
  const selectedColor =
    product.colors.find((color) => color.name === colorName) ?? product.colors[0]

  function selectColor(color: ColorOption) {
    setSearchParams({ color: color.name }, { replace: true })
  }

  return (
    <main id="top">
      <ProductDetail product={product} selectedColor={selectedColor} onColorChange={selectColor} />
    </main>
  )
}
