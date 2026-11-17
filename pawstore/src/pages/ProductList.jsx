import products from '../data/products.json';

import ProductCard from '../components/ProductCard';

import '../styles/products.css';

function ProductList({ onViewDetails }) {
  return (
    <section className="products-page">
      <h2>Catálogo de productos</h2>

      {products.length === 0 ? (
        <p>No hay productos disponibles por el momento.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
