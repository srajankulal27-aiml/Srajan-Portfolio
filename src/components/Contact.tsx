import { useState } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('srajanaiml27@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <Section id="contact" className="bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-8">
              LET'S BUILD<br/>
              SOMETHING<br/>
              INTELLIGENT.
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Have an idea or want to collaborate? Let's connect.
            </p>
          </motion.div>

          {/* Right Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 w-full md:w-auto"
          >
            <div className="flex flex-col gap-2 border-b-2 border-slate-200 pb-4">
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Email</span>
              <div className="flex items-center justify-between gap-8 group">
                <a 
                  href="mailto:srajanaiml27@gmail.com"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-violet-600 transition-colors"
                >
                  srajanaiml27@gmail.com
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  title="Copy Email"
                >
                  {emailCopied ? (
                    <><Check size={14} className="text-green-500" /> Copied</>
                  ) : (
                    <><Copy size={14} /> Copy</>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-slate-200 pb-4">
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Phone</span>
              <div className="flex items-center justify-between gap-8 group">
                <a 
                  href="tel:+918431674506"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-violet-600 transition-colors"
                >
                  +91 8431674506
                </a>
              </div>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/srajanmkulal/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border-b-2 border-slate-200 pb-4 hover:border-violet-600 transition-colors"
            >
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase group-hover:text-violet-500 transition-colors">LinkedIn</span>
              <div className="flex items-center justify-between gap-12">
                <span className="text-2xl font-bold tracking-tight text-slate-900">Connect with me</span>
                <ArrowUpRight className="group-hover:text-violet-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
            
            <a 
              href="https://github.com/srajankulal27-aiml"
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border-b-2 border-slate-200 pb-4 hover:border-violet-600 transition-colors"
            >
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase group-hover:text-violet-500 transition-colors">GitHub</span>
              <div className="flex items-center justify-between gap-12">
                <span className="text-2xl font-bold tracking-tight text-slate-900">View Repositories</span>
                <ArrowUpRight className="group-hover:text-violet-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
