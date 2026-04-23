export default function Footer() {
  return (
    <footer className="bg-primary-container w-full mt-20 border-t border-surface-container-highest">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-12 py-16 max-w-7xl mx-auto gap-8 text-center md:text-left">
        <div className="text-xl font-bold text-slate-800 opacity-80">
          FreshMilk Dairy
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs tracking-widest uppercase font-semibold text-slate-500">
          <a href="#" className="hover:text-secondary underline underline-offset-8 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary underline underline-offset-8 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-secondary underline underline-offset-8 transition-colors">Shipping Info</a>
          <a href="#" className="hover:text-secondary underline underline-offset-8 transition-colors">Wholesale</a>
        </nav>

        <div className="text-slate-500 text-[10px] md:text-xs tracking-widest uppercase md:text-right">
          © 2024 FreshMilk Dairy. Pure Transparency from Pasture to Glass.
        </div>
      </div>
    </footer>
  );
}
