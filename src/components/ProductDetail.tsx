import type { CSSProperties } from 'react'
import type { ColorOption, Product } from './ProductCard'

type ProductDetailProps = {
  product: Product
  selectedColor: ColorOption
  onColorChange: (color: ColorOption) => void
}

export default function ProductDetail({
  product,
  selectedColor,
  onColorChange,
}: ProductDetailProps) {
  return (
    <section className="product-detail" aria-labelledby="product-title">
      <a className="product-back-link" href="/#collection">
        <span aria-hidden="true">←</span> Back to collection
      </a>
      <div className="product-detail-content">
        <div
          className="product-detail-image"
          style={{ '--product-tint': selectedColor.value } as CSSProperties}
        >
          <img
            src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=1200&q=85`}
            alt={product.name}
          />
          <span className="image-tint" aria-hidden="true" />
        </div>
        <div className="product-detail-info">
          <p className="eyebrow">{product.description}</p>
          <h1 id="product-title">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <div className="product-detail-options">
            <span className="color-label">
              Color <span>{selectedColor.name}</span>
            </span>
            <div className="swatches" role="group" aria-label={`Colors for ${product.name}`}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`swatch${selectedColor.name === color.name ? ' is-selected' : ''}`}
                  style={{ '--swatch-color': color.value } as CSSProperties}
                  type="button"
                  aria-label={`Select ${color.name} for ${product.name}`}
                  aria-pressed={selectedColor.name === color.name}
                  onClick={() => onColorChange(color)}
                />
              ))}
            </div>
          </div>
          <button className="add-to-cart-button" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
