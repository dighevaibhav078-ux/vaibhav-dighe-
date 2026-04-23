import { motion } from 'motion/react';
import { Leaf, Truck, CheckCircle2, Handshake, ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage';

interface HomeProps {
  onShopNow: () => void;
}

export default function Home({ onShopNow }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-[90px]"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo1T8KSdk-G8bMe0jX0qCQcp-Ty16PoK5sEzhmh-Ieofb0BtjRFBMIPCOMoVfSAluocgt-ymIEJ2zxW-xVpKqPCdh7ebsk5KnygRq5_R6bsEnMQdhsFxXPJvY2UtgiABImqb4joNCqocWeglDh-D_-8nmGpYznD11Z9WGOxjq-RfayE1G8vipLOYcb2speOhb-CLYgx8-OTIXT6jmNlceuGFZVC76UEc5PugH6LIXW_oLluo_Kvga5LuPnNOGsGSk9YVf6kcyGT6n1"
            className="w-full h-full object-cover opacity-90"
            alt="Milk Splash"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-white/20 z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight"
          >
            Pure Milk, Pure Life
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto"
          >
            Experience the unmatched freshness of dairy sourced directly from pristine pastures. Pure transparency in every glass.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button onClick={onShopNow} className="btn-primary">Shop Now</button>
            <button className="btn-outline">Learn More</button>
          </motion.div>
        </div>
      </section>

      {/* Freshness Intro */}
      <section className="py-20 px-10 max-w-5xl mx-auto text-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <span className="inline-block px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-semibold text-sm">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Farm to Glass Freshness</h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            We believe in minimal processing and maximum transparency. Our cows graze on lush, organic pastures, ensuring every drop of milk is packed with natural goodness and flavor. Taste the difference of truly fresh dairy.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-10">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-on-surface text-center mb-16"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Fresh & Organic', desc: 'Sourced from certified organic pastures, completely free from artificial additives.', color: 'tertiary' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Cold-chain logistics ensure your milk arrives at the perfect temperature, quickly.', color: 'secondary' },
              { icon: CheckCircle2, title: 'High Quality', desc: 'Rigorous testing and minimal processing preserve essential nutrients and taste.', color: 'primary' },
              { icon: Handshake, title: 'Trusted', desc: 'Generations of farming expertise delivering reliability to your family table.', color: 'on-tertiary-container' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="card-elevated p-8 flex flex-col items-center text-center gap-4 bg-primary-container border border-surface-container-highest/30"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-${feature.color}/10 text-${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-on-surface">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Life on the Farm</h2>
            <p className="text-on-surface-variant max-w-lg">A glimpse into our sustainable practices and the happy environment where our dairy begins.</p>
          </div>
          <button className="hidden md:flex h-[56px] px-8 rounded-full bg-surface-container text-on-surface font-semibold text-sm items-center hover:bg-surface-container-high transition-colors gap-2 group">
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <SafeImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKyhD5kdFnTEBqj4LDiJT0vlgdIfOedtNo4m_P5Dv3hnh0acZB8_2nkjgqKgjoUaMXAwEHwYzE8ltBPBrLJGFaTtVt0Xm1eXANrrAYerOx8vcIoALiQL4L3ixJn7Ln54Mv7iVe6JiV01Ixh09Q7lMEcP4wxCy-ZufepY04VHWz4Ww5PW9L-KO1QOT_Qe0XAE6Vxqfr6BpF4IpPJVY8JQn5uQbeu-hnahGmL8xUuU5BznP9mi3nxTADEm8CnnN54iaJHz1Q_ze5tw_j"
              alt="Cows" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-2">Our Pastures</h3>
              <p className="text-white/80">Where pure milk begins.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden relative group h-[250px] md:h-auto">
            <SafeImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApcSb4BsbJuGvZpAcsBlugF8dBKQRfssBcFr3fLed000FA2TjKf1_bk9gYlVw6efgpTOFvlv092_cCQIbQYKwC7al7ArkHnCNtSEmVzF8dYCZjsBsh3l78_xZqs1opoj0S5YiIIv1M3ybTTjrZfh2v7BWFgjYMHYuuRLupP8MKw7mHRTkm4qgNtad9hFg7p3Mb8BRKGFkWwRozN4Fdwz5tZ8i-Kv6N1alVaqNSfYgVUnE32jcRH0QmY4VW0u2DrwXr18N1BUZUVSm1"
              alt="Pouring Milk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden relative group h-[250px] md:h-auto">
            <SafeImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHiBQJsfHy3Im-p_UpQfG4IQirLliRPzi00iHfysOo_wyPmlskeft0FEzLQcIw75Shaa5hcfyr3BPBxY9uwFG_4rAKAD2g1TR_rraHJ02Cylt9y7j_CSydruboDusNnL9RDOhANPLrIT6_Y7T-IlU129en3BDb7GRh6AF6dIcnCEPNY_fRC7wcRCbOkulYJN_5BWmZgDGlr1lrsvwoSf6_p5EYP-eZQv-eYH6nCFq9oM92kXTt2YQrPhxqOlpWe6KSTaMOfohKix13"
              alt="Dairy Products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
