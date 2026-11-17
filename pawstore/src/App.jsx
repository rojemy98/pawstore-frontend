
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {

  // Stores the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Changes the current page
  function handleNavigation(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <Header onNavigate={handleNavigation} />

      <main>

        {currentPage === "home" && (
          <Home onNavigate={handleNavigation} />
        )}

        {currentPage === "products" && (
          <h2>Catálogo de productos</h2>
        )}

      </main>

      <Footer />
    </>
  );
}

export default App;
