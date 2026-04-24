import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-sm bg-[var(--foreground)]/5 aspect-[3/4] relative">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/5 transition-colors duration-500" />
      </Link>
      
      <div className="mt-4 flex flex-col items-start gap-1">
        <div className="flex justify-between w-full items-baseline">
          <Link to={`/product/${product.id}`} className="hover:underline underline-offset-4">
            <h3 className="text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">{product.name}</h3>
          </Link>
          <p className="text-xs font-mono opacity-60">${product.price}</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground)]/40">{product.category}</p>
      </div>

      <button 
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        className="absolute top-4 right-4 bg-[var(--background)]/90 text-[var(--foreground)] backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
      >
        <Plus className="w-4 h-4" />
      </button>
    </motion.div>

  );
};
