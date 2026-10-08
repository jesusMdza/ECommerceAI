import { Link, Outlet, Route, Routes } from 'react-router-dom'
import type { Product } from './components/ProductPage/ProductCard'
import FaqPage from './components/FaqPage'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage/ProductPage'

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

function StoreLayout() {
  return (
    <div className="storefront">
      <header className="site-header">
        <Link className="wordmark" to="/#top" aria-label="aicommerce home">
          ai<span>commerce</span>
        </Link>
        <Link className="header-link" to="/faq">
          FAQ
        </Link>
      </header>
      <Outlet />
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

function NotFoundPage() {
  return (
    <main id="top" className="product-not-found">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <Link className="product-back-link" to="/">
        <span aria-hidden="true">←</span> Back to home
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route index element={<HomePage products={products} />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="products/:productId" element={<ProductPage products={products} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
