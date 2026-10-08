import { useEffect, useState } from 'react'
import ProductCard, { type ColorOption, type Product } from './components/ProductCard'
import ProductDetail from './components/ProductDetail'

const products: Product[] = [
  {
    id: '40fa81feb1ab41f49ce94d87a5c793a6',
    name: 'Studio headphones',
    description: 'Sound, made personal',
    price: 189,
    image: 'photo-1505740420928-5e560c06d30e',
    colors: [
      { name: 'Citrus', value: '#c4e246' },
      { name: 'Coral', value: '#ec7058' },
      { name: 'Ink', value: '#303a36' },
    ],
  },
  {
    id: 'f724cf53943e49e5bfe098afb4e171fe',
    name: 'Pocket camera',
    description: 'Keep the good bits',
    price: 429,
    image: 'photo-1526170375885-4d8ecf77b99f',
    colors: [
      { name: 'Sky', value: '#80b9c4' },
      { name: 'Moss', value: '#78866b' },
      { name: 'Rose', value: '#d89a8e' },
    ],
  },
  {
    id: '7a4e54104af145df9b57208fc2d58738',
    name: 'Everyday sneakers',
    description: 'A little more outside',
    price: 120,
    image: 'photo-1542291026-7eec264c27ff',
    colors: [
      { name: 'Tomato', value: '#eb614d' },
      { name: 'Lemon', value: '#d5db61' },
      { name: 'Ocean', value: '#4f8f9e' },
    ],
  },
  {
    id: '4a0fd12e0b2a41ac8f2dac01efb2232b',
    name: 'Daily watch',
    description: 'Right on your time',
    price: 245,
    image: 'photo-1523275335684-37898b6baf30',
    colors: [
      { name: 'Poppy', value: '#e96f52' },
      { name: 'Sage', value: '#9aab81' },
      { name: 'Midnight', value: '#3b4b58' },
    ],
  },
]

export default function App() {
  const productRoute = window.location.pathname.match(/^\/products\/([^/]+)\/?$/)
  const productId = productRoute?.[1]
  const selectedProduct = products.find((product) => product.id === productId)
  const isNotFound = window.location.pathname !== '/' && !selectedProduct
  const [selectedDetailColor, setSelectedDetailColor] = useState<ColorOption | undefined>(() => {
    if (!selectedProduct) {
      return undefined
    }

    const colorName = new URLSearchParams(window.location.search).get('color')
    return (
      selectedProduct.colors.find((color) => color.name === colorName) ?? selectedProduct.colors[0]
    )
  })

  function selectDetailColor(color: ColorOption) {
    setSelectedDetailColor(color)
    const url = new URL(window.location.href)
    url.searchParams.set('color', color.name)
    window.history.replaceState(null, '', url)
  }

  return (
    <div className="storefront">
      <header className="site-header">
        <a className="wordmark" href="/#top" aria-label="aicommerce home">
          ai<span>commerce</span>
        </a>
        <p className="header-note">Good things, thoughtfully picked.</p>
        <a className="header-link" href="/#collection">
          Explore collection <span aria-hidden="true">↘</span>
        </a>
      </header>

      {selectedProduct ? (
        <main id="top">
          <ProductDetail
            product={selectedProduct}
            selectedColor={selectedDetailColor ?? selectedProduct.colors[0]}
            onColorChange={selectDetailColor}
          />
        </main>
      ) : isNotFound ? (
        <main id="top" className="product-not-found">
          <p className="eyebrow">PRODUCT NOT FOUND</p>
          <h1>This pick isn’t here.</h1>
          <a className="product-back-link" href="/#collection">
            <span aria-hidden="true">←</span> Back to collection
          </a>
        </main>
      ) : (
        <main id="top">
          <section className="intro" aria-labelledby="page-title">
            <p className="eyebrow">
              <span /> THE EVERYDAY EDIT · NO. 01
            </p>
            <h1 id="page-title">
              A little more
              <br />
              <em>you</em> in every day.
            </h1>
            <p className="intro-copy">
              Useful things with a point of view.
              <br />
              Pick your favorite shade.
            </p>
            <div className="intro-stamp" aria-hidden="true">
              MADE FOR
              <br />
              YOUR EVERYDAY <span>✳</span>
            </div>
          </section>

          <section className="collection" id="collection" aria-labelledby="collection-title">
            <div className="collection-heading">
              <div>
                <p className="eyebrow">THE SHORTLIST</p>
                <h2 id="collection-title">Good picks, no guesswork.</h2>
              </div>
              <span className="item-count">{String(products.length).padStart(2, '0')} OBJECTS</span>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <span className="wordmark wordmark-small">
          ai<span>commerce</span>
        </span>
        <p>Less scrolling. Better living.</p>
        <span>THE EVERYDAY EDIT · 2026</span>
      </footer>
    </div>
  )
}
