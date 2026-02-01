import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AllCategoryBrandsPage from './pages/AllCategoryBrandsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage'; // adjust the path if different
import FloatingWhatsapp from './components/FloatingWhatsapp';


function App() {
  return (
    <>
    
      <Router>
          <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic Category Page */}
          <Route path="/categoryBrand/:slug" element={<AllCategoryBrandsPage />} />
         <Route path="/product/:categorySlug/:productSlug" element={<ProductDetailPage />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
         <Footer />
      </Router>
       <FloatingWhatsapp />
     
    </>

  );
}

export default App;
