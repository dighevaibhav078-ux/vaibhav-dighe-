import { ShoppingCart, User, Menu } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  const navLinks: { label: string; view: View }[] = [
    { label: 'Shop', view: 'shop' },
    { label: 'Our Story', view: 'our-story' },
    { label: 'Sustainability', view: 'sustainability' },
    { label: 'Recipes', view: 'recipes' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-[1440px] mx-auto">
        <button 
          onClick={() => onViewChange('home')}
          className="text-2xl font-black text-slate-900 tracking-tighter hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        >
          FreshMilk Dairy
        </button>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => onViewChange(link.view)}
              className={`transition-all duration-300 scale-100 hover:scale-110 active:scale-95 cursor-pointer ${
                currentView === link.view 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-slate-600 hover:text-secondary'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6 md:gap-8 text-secondary">
          <button 
            onClick={() => onViewChange('cart')}
            className={`hover:text-secondary-container transition-all duration-300 scale-110 active:scale-90 cursor-pointer ${currentView === 'cart' ? 'text-secondary-container bg-secondary/5 p-2 rounded-full' : ''}`}
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button 
            onClick={() => onViewChange('account')}
            className={`hover:text-secondary-container transition-all duration-300 scale-110 active:scale-90 cursor-pointer ${currentView === 'account' ? 'text-secondary-container bg-secondary/5 p-2 rounded-full' : ''}`}
          >
            <User className="w-6 h-6" />
          </button>
          <button className="md:hidden hover:text-secondary-container transition-all duration-300 scale-110 active:scale-90 cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
