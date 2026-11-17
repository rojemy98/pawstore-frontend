
import "../styles/header.css";

function Header({ onNavigate }) {
  return (
    <header>
      <h1>PawStore</h1>

      <nav>
        <button onClick={() => onNavigate("home")}>
          Inicio
        </button>

        <button onClick={() => onNavigate("products")}>
          Productos
        </button>

        <a href="#contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
