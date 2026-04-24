import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { ShopAll } from './pages/ShopAll';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { NotFound } from './pages/NotFound';
import { SearchOverlay } from './components/SearchOverlay';
import { NewArrivals } from './pages/NewArrivals';
import { About } from './pages/About';
import { NewsletterModal } from './components/NewsletterModal';
import { AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar 
            onOpenCart={() => setIsCartOpen(true)} 
            onOpenSearch={() => setIsSearchOpen(true)}
          />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
          
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopAll />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer onOpenNewsletter={() => setIsNewsletterOpen(true)} />
        </div>
      </Router>
    </CartProvider>
    </ThemeProvider>
  );
}
