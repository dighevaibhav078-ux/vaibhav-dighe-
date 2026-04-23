import { useState, useEffect } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import OurStory from './components/OurStory';
import Sustainability from './components/Sustainability';
import Recipes from './components/Recipes';
import Cart from './components/Cart';
import Account from './components/Account';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onShopNow={() => setCurrentView('shop')} />;
      case 'shop':
        return <Shop />;
      case 'contact':
        return <Contact />;
      case 'our-story':
        return <OurStory />;
      case 'sustainability':
        return <Sustainability />;
      case 'recipes':
        return <Recipes />;
      case 'cart':
        return <Cart />;
      case 'account':
        return <Account />;
      default:
        return <Home onShopNow={() => setCurrentView('shop')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-grow">
        {renderView()}
      </div>
      <Footer />
    </div>
  );
}
