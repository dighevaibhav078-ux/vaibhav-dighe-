import { motion } from 'motion/react';
import { ChefHat, Timer, ShoppingBag } from 'lucide-react';
import SafeImage from './SafeImage';

const RECIPES = [
  {
    title: "Artisanal Buttermilk Pancakes",
    time: "25 min",
    difficulty: "Easy",
    image: "https://lh3.googleusercontent.com/aida-public/AK-WpM0Q9n8kO9R5_qX_V_6XW-qW-p0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-A"
  },
  {
    title: "Creamy Farm-Style Yogurt Bowl",
    time: "10 min",
    difficulty: "Beginner",
    image: "https://lh3.googleusercontent.com/aida-public/AK-WpM0Q9n8kO9R5_qX_V_6XW-qW-p0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-B"
  },
  {
    title: "Gourmet Cheese Board Platter",
    time: "15 min",
    difficulty: "Medium",
    image: "https://lh3.googleusercontent.com/aida-public/AK-WpM0Q9n8kO9R5_qX_V_6XW-qW-p0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-P0X-R6X-C"
  }
];

export default function Recipes() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-[140px] pb-20 px-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <h1 className="text-5xl font-bold text-on-surface mb-6">Kitchen Inspiration</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            From quick breakfasts to elegant appetizers, discover how our pasture-fresh dairy can elevate your cooking.
          </p>
        </div>
        <button className="btn-primary">
          <ChefHat className="w-5 h-5 mr-2" />
          <span>Submit a Recipe</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECIPES.map((recipe, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-elevated flex flex-col group overflow-hidden"
          >
            <div className="relative h-60 overflow-hidden">
              <SafeImage 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {recipe.difficulty}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold mb-4">{recipe.title}</h3>
              <div className="flex items-center gap-6 text-on-surface-variant mb-8">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  <span className="text-sm">{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="text-sm">5 Ingredients</span>
                </div>
              </div>
              <button className="text-secondary font-bold hover:underline flex items-center group/btn">
                View Recipe 
                <motion.span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</motion.span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
