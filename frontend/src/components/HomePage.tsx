import ProductCard, { type Product } from './ProductPage/ProductCard'

type HomePageProps = {
  products: Product[]
}

export default function HomePage({ products }: HomePageProps) {
  return (
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
  )
}
