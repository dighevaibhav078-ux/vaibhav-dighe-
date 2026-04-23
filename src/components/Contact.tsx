import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Tractor } from 'lucide-react';

export default function Contact() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-grow pt-[140px] pb-20 px-10 max-w-6xl w-full mx-auto"
    >
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-on-surface mb-6">Let's Connect</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Whether you have a question about our farm practices, wholesale inquiries, or just want to share a recipe, our team is here to listen. Pure transparency, always.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column: Contact Form */}
        <div className="card-elevated p-8 lg:p-12 border border-surface-container-highest/50 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-on-surface mb-8">Send a Message</h2>
          
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="name">Full Name</label>
              <input 
                className="bg-surface-container-low border-none rounded-xl px-5 py-4 min-h-[56px] text-on-surface placeholder:text-outline focus:ring-1 focus:ring-secondary focus:bg-white shadow-sm transition-all" 
                id="name" placeholder="Vaibhav Dighe" type="text"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Email Address</label>
              <input 
                className="bg-surface-container-low border-none rounded-xl px-5 py-4 min-h-[56px] text-on-surface placeholder:text-outline focus:ring-1 focus:ring-secondary focus:bg-white shadow-sm transition-all" 
                id="email" placeholder="dighevaibhav078@gmail.com" type="email"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="message">Your Message</label>
              <textarea 
                className="bg-surface-container-low border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-secondary focus:bg-white shadow-sm transition-all resize-none" 
                id="message" placeholder="How can we help you today?" rows={5}
              ></textarea>
            </div>
            
            <button className="btn-primary mt-4 group">
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right Column: Details & Map */}
        <div className="flex flex-col gap-10">
          <div className="grid gap-8">
            <ContactDetail 
              icon={MapPin} 
              title="Visit the Farm" 
              detail="123 Pasture Lane, Green Valley, CA 90210" 
            />
            <ContactDetail 
              icon={Phone} 
              title="Call Us" 
              detail="+1 (555) 123-4567" 
              subDetail="Mon-Fri, 8am - 5pm PST"
            />
            <ContactDetail 
              icon={Mail} 
              title="Email Us" 
              detail="hello@freshmilkdairy.com" 
              isLink
            />
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[320px] rounded-2xl bg-surface-container-low overflow-hidden relative shadow-[0px_10px_30px_rgba(0,0,0,0.04)] mt-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5z3mlDrY907TzM2e4QRVHqPQl9JdjRnXh1ZwDcsWjGPyxzGSfgUMDOF8z-6X2XAvXSX44oHFQU9Sjxesu0QTIuw-AMbVPXp_UEM1JasXlsFW0ANzJvMICC2_QELTEtMNVaRdImDg0jeqtVzCrb5Tza1yU94qD-ExaUYNvswm8GRMxL6PDOLNdQAFrr_LTr3jqn4FGQ9hYGFV3OBKkfl7ADPViQs5Zz2al_hfwKoQpW40pEwa5GHR4-Fh8YPVajkCtQBbGeZP6y7n_" 
              alt="Map" className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            />
            {/* Decorative Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <Tractor className="text-white w-6 h-6 fill-white/20" />
              </div>
              <div className="w-4 h-1 bg-black/10 rounded-full mt-2 blur-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

function ContactDetail({ 
  icon: Icon, 
  title, 
  detail, 
  subDetail, 
  isLink 
}: { 
  icon: any; 
  title: string; 
  detail: string; 
  subDetail?: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-full bg-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-300">
        <Icon className="w-6 h-6 text-secondary fill-secondary/10" />
      </div>
      <div>
        <h3 className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">{title}</h3>
        {isLink ? (
          <a href={`mailto:${detail}`} className="text-lg font-medium text-secondary hover:text-secondary-container transition-colors">
            {detail}
          </a>
        ) : (
          <p className="text-lg font-medium text-on-surface whitespace-pre-line">{detail}</p>
        )}
        {subDetail && <p className="text-sm text-on-surface-variant mt-1">{subDetail}</p>}
      </div>
    </div>
  );
}
