
function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">

      <img
        src={product.imagen}
        alt={product.nombre}
      />

      <h3>{product.nombre}</h3>

      <p>
        ₡{product.precio.toLocaleString("es-CR")}
      </p>

      <span>{product.categoria}</span>

      <button onClick={() => onViewDetails(product)}>
        Ver detalles
      </button>

    </article>
  );
}

export default ProductCard;
