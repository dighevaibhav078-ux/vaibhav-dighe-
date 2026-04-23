import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Trash2, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import SafeImage from './SafeImage';

export default function Cart() {
  const cartItems = PRODUCTS.slice(0, 2); // Mock cart items

  return (
    <motion.main 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pt-[140px] pb-20 px-10 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-12">
        <ShoppingBag className="w-8 h-8 text-secondary" />
        <h1 className="text-4xl font-bold text-on-surface">Your Basket</h1>
        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-bold ml-2">2 Items</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="card-elevated p-6 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-surface-container-low rounded-2xl overflow-hidden flex-shrink-0">
                <SafeImage src={item.image} alt={item.name} fallbackType="item" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-1 mb-4">{item.description}</p>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-secondary text-lg">${item.price.toFixed(2)}</span>
                  <div className="h-4 w-[1px] bg-outline-variant"></div>
                  <span className="text-sm text-on-surface-variant">Qty: 1</span>
                </div>
              </div>
              <button className="p-3 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-full transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          
          <div className="flex items-center gap-2 p-6 bg-surface-container-low rounded-[32px] text-on-surface-variant text-sm">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span>Pure transparency: Your data is secure and encrypted.</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-elevated p-8 bg-surface-container-low/50">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span>$8.49</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-secondary font-bold">FREE</span>
              </div>
              <div className="border-t border-outline-variant pt-4 flex justify-between font-black text-xl">
                <span>Total</span>
                <span className="text-secondary">$8.49</span>
              </div>
            </div>
            <button className="btn-primary w-full group">
              <span>Checkout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
