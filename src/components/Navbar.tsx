import React from 'react';
import { ShoppingBag, Menu, Search as SearchIcon, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenSearch }) => {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-b-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Menu className="w-5 h-5 cursor-pointer lg:hidden" />
          <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-[var(--foreground)]/60">
            <Link to="/shop" className="hover:text-[var(--foreground)] transition-colors">Shop All</Link>
            <Link to="/new-arrivals" className="hover:text-[var(--foreground)] transition-colors">New Arrivals</Link>
            <Link to="/about" className="hover:text-[var(--foreground)] transition-colors">About</Link>
          </div>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl tracking-[0.1em] font-light">NEURAL</h1>
        </Link>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-[var(--foreground)]/5 rounded-full transition-colors"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button 
            onClick={onOpenSearch}
            className="p-2 hover:bg-[var(--foreground)]/5 rounded-full transition-colors"
          >
            <SearchIcon className="w-5 h-5 text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors" />
          </button>
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 group relative p-2"
          >
            <ShoppingBag className="w-5 h-5 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)] transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--foreground)] text-[var(--background)] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

