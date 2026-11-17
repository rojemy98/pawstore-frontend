import '../styles/product-detail.css';

function ProductDetail({ product, onNavigate }) {
  return (
    <section className="product-detail">
      <img src={product.imagen} alt={product.nombre} />

      <h2>{product.nombre}</h2>

      <p className="detail-price">₡{product.precio.toLocaleString('es-CR')}</p>

      <span className="detail-category">{product.categoria}</span>

      <p className="detail-description">{product.descripcion}</p>

      <p className="detail-information">
        Más adelante aquí se podrá agregar este producto al carrito y completar
        la compra.
      </p>

      <button onClick={() => onNavigate('products')}>Volver al catálogo</button>
    </section>
  );
}

export default ProductDetail;
