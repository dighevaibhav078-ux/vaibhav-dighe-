import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Droplets, Egg, Croissant, IceCream, LayoutGrid, Leaf, Snowflake, ShoppingCart, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import SafeImage from './SafeImage';

interface ProductCardProps {
  product: Product; 
  quantity: number;
  onQuantityChange: (delta: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  quantity, 
  onQuantityChange 
}) => {
  return (
    <article className="card-elevated flex flex-col overflow-hidden relative group h-full">
      {product.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
            product.tag.type === 'organic' 
              ? 'bg-tertiary-container text-on-tertiary-container' 
              : 'bg-secondary-container text-on-secondary-container'
          }`}>
            {product.tag.type === 'organic' ? <Leaf className="w-3 h-3" /> : <Snowflake className="w-3 h-3" />}
            {product.tag.label}
          </span>
        </div>
      )}
      
      <div className="aspect-square bg-surface-container-low relative overflow-hidden p-8 flex items-center justify-center">
        <SafeImage 
          src={product.image} 
          alt={product.name}
          fallbackType="item"
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h2 className="text-xl font-bold text-on-surface line-clamp-1">{product.name}</h2>
          <span className="text-secondary font-bold text-xl whitespace-nowrap">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-8 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="flex items-center bg-primary-container rounded-full h-[56px] px-2 shadow-inner">
            <button 
              onClick={() => onQuantityChange(-1)}
              className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary rounded-full transition-colors active:scale-90"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-lg w-8 text-center text-on-surface">{quantity}</span>
            <button 
              onClick={() => onQuantityChange(1)}
              className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary rounded-full transition-colors active:scale-90"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button className="flex-grow bg-secondary text-on-secondary h-[56px] px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-sm active:scale-95 group">
            <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Milk');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    '1': 1, '2': 1, '3': 1
  });

  const categories = [
    { name: 'All Milk', icon: Droplets },
    { name: 'Farm Eggs', icon: Egg },
    { name: 'Butter & Creams', icon: Croissant },
    { name: 'Yogurts', icon: IceCream },
    { name: 'Artisanal Cheese', icon: LayoutGrid },
  ];

  const handleQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const filteredProducts = PRODUCTS.filter(p => selectedCategory === 'All Milk' || p.category === selectedCategory);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1440px] mx-auto w-full px-10 pb-20 pt-[140px] grid grid-cols-1 md:grid-cols-12 gap-8"
    >
      {/* Sidebar Filter */}
      <aside className="md:col-span-3 lg:col-span-2 space-y-8">
        <div className="sticky top-32">
          <h3 className="text-2xl font-bold text-on-surface mb-6">Categories</h3>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat.name}>
                <button 
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-3 w-full text-left transition-all group font-medium ${
                    selectedCategory === cat.name 
                      ? 'text-secondary font-bold' 
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  <cat.icon className={`w-5 h-5 ${selectedCategory === cat.name ? 'fill-secondary/20' : ''}`} />
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Grid Area */}
      <div className="md:col-span-9 lg:col-span-10">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-on-surface mb-4">Pasture to Glass</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover our range of purely transparent, farm-fresh dairy products. Carefully crafted for minimal processing and maximum flavor.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              quantity={quantities[product.id] ?? 1}
              onQuantityChange={(delta) => handleQuantity(product.id, delta)}
            />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400">
              No products found in this category. Stay tuned!
            </div>
          )}
        </div>
      </div>
    </motion.main>
  );
}
