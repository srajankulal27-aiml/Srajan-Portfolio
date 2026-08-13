import { Section } from './ui/Section';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current) + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  // For floats (like 8.51) we just use a simple fade in since counting floats is messy with this setup,
  // but let's handle the float logic by checking if it's an integer.
  const isFloat = value % 1 !== 0;

  if (isFloat) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {value}{suffix}
      </motion.span>
    );
  }

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function About() {
  return (
    <Section id="about" className="bg-[#fdfdfd] py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Editorial Heading */}
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-900 sticky top-32"
            >
              ABOUT ME
            </motion.h2>
          </div>

          {/* Right: Content & Stats */}
          <div className="lg:w-2/3 space-y-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <p className="text-2xl sm:text-3xl text-slate-800 leading-tight font-medium tracking-tight">
                I am an AI & ML engineering student passionate about building intelligent solutions and exploring emerging technologies.
              </p>
              
              <div className="pl-6 border-l-2 border-violet-200 space-y-2">
                <p className="text-lg text-slate-600 font-medium">B.E. Artificial Intelligence and Machine Learning</p>
                <p className="text-slate-500">Alva's Institute of Engineering and Technology</p>
                <p className="text-slate-500 font-medium pt-2">CGPA: <span className="text-violet-600">8.51</span></p>
              </div>
            </motion.div>

            {/* Clean Horizontal Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-100"
            >
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter">
                  8.51
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  CGPA
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter">
                  <AnimatedCounter value={110} suffix="+" />
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  Problems Solved
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter">
                  <AnimatedCounter value={4} suffix="+" />
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  AI/ML Projects
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter">
                  <AnimatedCounter value={3} suffix="+" />
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  Hackathons
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Section>
  );
}
