import { motion } from 'motion/react';
import { Leaf, Recycle, Wind, Sun } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Sustainability() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-[140px] pb-20 px-10 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-on-surface mb-6">Pasture with Purpose</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Sustainability isn't just a buzzword for us—it's the foundation of everything we do. We're committed to leaving the Earth better than we found it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
        <SustainCard 
          icon={Leaf} 
          title="Regenerative Farming" 
          description="We use rotational grazing to improve soil health and increase biodiversity in our pastures."
        />
        <SustainCard 
          icon={Recycle} 
          title="Zero Waste Goal" 
          description="Our glass bottles are 100% recyclable and we offer a bottle-return reward program."
        />
        <SustainCard 
          icon={Sun} 
          title="Solar Powered" 
          description="We generate 70% of our farm's energy needs through onsite solar panels."
        />
        <SustainCard 
          icon={Wind} 
          title="Water Conservation" 
          description="Our advanced irrigation systems reduce water waste by 40% compared to traditional methods."
        />
      </div>

      <div className="relative rounded-[48px] overflow-hidden group">
        <SafeImage 
          src="https://lh3.googleusercontent.com/aida-public/AK-WpM0Q9n8kO9R5_qX_V_6XW-qW-p0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-A" 
          alt="Green pasture" 
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
          <div className="max-w-xl">
            <h2 className="text-white text-3xl font-bold mb-4">Preserving the Future</h2>
            <p className="text-white/80">
              Every bottle of FreshMilk you enjoy supports a cleaner, greener dairy industry. Together, we can make a difference.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

function SustainCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="card-elevated p-10 hover:translate-y-[-8px] transition-all">
      <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}
