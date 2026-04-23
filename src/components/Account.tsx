import { motion } from 'motion/react';
import { User, Settings, Package, CreditCard, LogOut, ChevronRight } from 'lucide-react';

export default function Account() {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pt-[140px] pb-20 px-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Sidebar */}
        <aside className="w-full md:w-72 space-y-2">
          <div className="text-center mb-8 px-4">
            <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl">
              <User className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Vaibhav Dighe</h2>
            <p className="text-sm text-on-surface-variant">dighevaibhav078@gmail.com</p>
          </div>
          
          <AccountNavLink icon={Package} label="Order History" active />
          <AccountNavLink icon={CreditCard} label="Payment Methods" />
          <AccountNavLink icon={Settings} label="Preferences" />
          <div className="pt-4 mt-4 border-t border-outline-variant">
            <AccountNavLink icon={LogOut} label="Logout" color="text-error" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow space-y-8">
          <section>
            <h1 className="text-4xl font-bold mb-8">Active Orders</h1>
            <div className="card-elevated p-8 flex flex-col sm:flex-row justify-between items-center bg-secondary/5 border border-secondary/10 relative overflow-hidden group">
              <div className="z-10">
                <div className="flex items-center gap-2 mb-2">
                   <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
                   <span className="text-secondary font-bold uppercase tracking-widest text-xs">In Transit</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Order #FD-9201</h3>
                <p className="text-sm text-on-surface-variant">Expected Delivery: Today, April 23</p>
              </div>
              <button className="btn-outline mt-4 sm:mt-0 z-10 group">
                <span>Track Order</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Past Purchases</h2>
            <div className="space-y-4 opacity-60">
              <div className="card-elevated p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Organic Whole Milk x2</h4>
                  <p className="text-sm">Delivered on April 15</p>
                </div>
                <span className="font-bold text-secondary">$12.98</span>
              </div>
              <div className="card-elevated p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Farm Fresh Eggs x1</h4>
                  <p className="text-sm">Delivered on April 8</p>
                </div>
                <span className="font-bold text-secondary">$5.49</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.main>
  );
}

function AccountNavLink({ icon: Icon, label, active, color = "text-on-surface" }: { icon: any, label: string, active?: boolean, color?: string }) {
  return (
    <button className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all group ${
      active ? 'bg-secondary text-on-secondary shadow-lg' : `hover:bg-secondary/5 ${color}`
    }`}>
      <Icon className={`w-5 h-5 ${active ? 'text-white' : ''}`} />
      <span className="font-bold">{label}</span>
      {!active && <ChevronRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </button>
  );
}
