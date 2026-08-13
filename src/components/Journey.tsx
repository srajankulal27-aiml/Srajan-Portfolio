import { Section } from './ui/Section';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Users, ShieldCheck, ArrowUpRight } from 'lucide-react';

const hackathons = [
  {
    title: 'TECHNOVATE-2K25',
    role: 'Team Leader',
    organizedBy: 'AIML & CSDS',
    icon: <Trophy size={20} className="text-violet-600" />
  },
  {
    title: 'TECHFUSION 2.0',
    team: 'Code Error 404',
    role: 'Team Member',
    icon: <Users size={20} className="text-violet-600" />
  }
];

const certifications = [
  {
    title: 'Cloud Computing',
    provider: 'NPTEL',
    duration: '12 Weeks',
    file: '/certificates/cloud-computing.pdf', // Placeholder for actual file
    icon: <Award size={20} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
  },
  {
    title: 'Introduction to Internet of Things',
    provider: 'NPTEL',
    duration: '12 Weeks',
    file: '/certificates/iot.pdf', // Placeholder for actual file
    icon: <Award size={20} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
  },
  {
    title: 'Generative AI',
    provider: 'Coursera',
    file: '/certificates/generative-ai.pdf', // Placeholder for actual file
    icon: <ShieldCheck size={20} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
  },
  {
    title: 'Cloud Computing',
    provider: 'Coursera',
    file: '/certificates/cloud-computing-coursera.pdf', // Placeholder for actual file
    icon: <ShieldCheck size={20} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="journey" className="bg-[#fdfdfd] py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hackathons Timeline */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-900">
              HACKATHONS
            </h2>
          </motion.div>

          <div className="max-w-3xl relative" ref={containerRef}>
            {/* Timeline Line Base */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200"></div>
            
            {/* Animated Timeline Line Progress */}
            <motion.div 
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute left-6 top-0 bottom-0 w-px bg-violet-500"
            ></motion.div>

            <div className="space-y-16 relative">
              {hackathons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="flex gap-8 items-start relative"
                >
                  {/* Timeline dot/icon */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-violet-100 shadow-sm flex items-center justify-center relative z-10 shrink-0">
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <div className="space-y-1">
                      {item.role && (
                        <p className="text-slate-600 font-medium">
                          Role: <span className="text-slate-900">{item.role}</span>
                        </p>
                      )}
                      {item.team && (
                        <p className="text-slate-600 font-medium">
                          Team: <span className="text-slate-900">{item.team}</span>
                        </p>
                      )}
                      {item.organizedBy && (
                        <p className="text-slate-600 font-medium">
                          Organized by: <span className="text-slate-900">{item.organizedBy}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-900">
              CERTIFICATIONS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                href={cert.file || '#'}
                target={cert.file ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-violet-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-50 group-hover:bg-violet-50 p-3 rounded-full transition-colors shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors tracking-tight">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        {cert.provider}
                      </span>
                      {cert.duration && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-sm font-medium text-slate-500">
                            {cert.duration}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* View Certificate CTA */}
                <div className="mt-8 flex items-center justify-end text-sm font-bold text-slate-400 group-hover:text-violet-600 transition-colors w-full">
                  View Certificate <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
