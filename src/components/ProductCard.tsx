import type { CSSProperties } from 'react'

export type ColorOption = {
  name: string
  value: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  colors: ColorOption[]
}

type ProductCardProps = {
  product: Product
  selectedColor: ColorOption
  onColorChange: (color: ColorOption) => void
  index: number
}

export default function ProductCard({
  product,
  selectedColor,
  onColorChange,
  index,
}: ProductCardProps) {
  return (
    <article className="product-card" style={{ '--card-index': index } as CSSProperties}>
      <div
        className="product-image"
        style={{ '--product-tint': selectedColor.value } as CSSProperties}
      >
        <img
          src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=85`}
          alt={product.name}
          loading="lazy"
        />
        <span className="image-tint" aria-hidden="true" />
        <span className="image-index">0{index + 1}</span>
      </div>
      <div className="product-details">
        <div className="product-heading">
          <div>
            <p className="product-description">{product.description}</p>
            <h2>
              <a
                className="product-link"
                href={`/products/${product.id}`}
                aria-label={`View ${product.name}`}
              >
                {product.name}
              </a>
            </h2>
          </div>
          <p className="product-price">${product.price}</p>
        </div>
        <div className="product-options">
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
      </div>
    </article>
  )
}
