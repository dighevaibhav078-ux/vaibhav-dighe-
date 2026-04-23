import { motion } from 'motion/react';
import { Heart, Users, History, Gem } from 'lucide-react';
import SafeImage from './SafeImage';

export default function OurStory() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-[140px] pb-20 px-10 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-on-surface mb-6">Our Roots</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Inspired by a simple desire for pure, unprocessed dairy, FreshMilk Dairy began in a small pasture with a commitment to transparency and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="rounded-[48px] overflow-hidden shadow-2xl">
          <SafeImage 
            src="https://lh3.googleusercontent.com/aida-public/AK-WpM0Q9n8kO9R5_qX_V_6XW-qW-p0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X" 
            alt="Farm history" 
            fallbackType="square"
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="space-y-8">
          <StoryFeature 
            icon={History} 
            title="Founded in 1992" 
            description="What started as a family project to provide fresh milk for our children grew into a mission to share purity with the neighborhood."
          />
          <StoryFeature 
            icon={Users} 
            title="Community First" 
            description="We employ local farmers and support regional agriculture, ensuring our growth benefits everyone around us."
          />
          <StoryFeature 
            icon={Gem} 
            title="Uncompromising Standards" 
            description="We believe in minimal processing. No additives, no shortcuts. Just pure, cold-pressed dairy the way nature intended."
          />
        </div>
      </div>

      <div className="card-elevated p-12 text-center bg-secondary/5 rounded-[48px]">
        <Heart className="w-12 h-12 text-secondary mx-auto mb-6 fill-secondary/10" />
        <h2 className="text-3xl font-bold mb-4">A Promise to You</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto italic">
          "From the moment we check our pasture in the early morning to the final seal on each bottle, we prioritize the health of our herd and the trust of our customers."
        </p>
      </div>
    </motion.main>
  );
}

function StoryFeature({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
