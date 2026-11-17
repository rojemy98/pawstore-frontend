import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleNavigation(page) {
    setCurrentPage(page);

    setSelectedProduct(null);
  }

  function handleViewDetails(product) {
    setSelectedProduct(product);

    setCurrentPage('detail');
  }

  return (
    <>
      <Header onNavigate={handleNavigation} />

      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigation} />}

        {currentPage === 'products' && (
          <ProductList onViewDetails={handleViewDetails} />
        )}

        {currentPage === 'detail' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onNavigate={handleNavigation}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
