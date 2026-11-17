
import "../styles/home.css";

function Home({ onNavigate }) {
  return (
    <section className="home">

      <h2>Bienvenido a PawStore</h2>

      <p>
        Somos una tienda dedicada a ofrecer productos de calidad para tus mascotas.
      </p>

      <p>
        Explora nuestro catálogo para encontrar camas, juguetes, accesorios y más.
      </p>

      <button onClick={() => onNavigate("products")}>
        Ver productos
      </button>

      <p>
        Esta es la página principal de la aplicación. Más adelante aquí se podrán mostrar productos destacados.
      </p>

    </section>
  );
}

export default Home;
