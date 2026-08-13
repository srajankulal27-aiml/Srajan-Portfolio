import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const exploringItems = [
  'Large Language Models',
  'Generative AI',
  'Cloud Technologies',
  'Emerging AI Tools',
  'Computer Vision',
  'Creative Sketching'
];

export function CurrentFocus() {
  return (
    <Section id="focus" className="bg-violet-600 py-24 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[200%] bg-white blur-[120px] rounded-full mix-blend-overlay transform -rotate-12"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-4"
          >
            CURRENTLY EXPLORING
          </motion.h2>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1035] }} // Approximated width, works well enough for infinite scroll effect
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20
            }}
            className="flex items-center gap-16 md:gap-24 px-8 md:px-12"
          >
            {[...exploringItems, ...exploringItems, ...exploringItems].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-16 md:gap-24"
              >
                <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  {item}
                </span>
                <span className="text-white/30 text-4xl">✧</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
