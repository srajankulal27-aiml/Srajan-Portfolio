import { useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Project {
  id: string;
  number: string;
  title: string;
  status?: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  details?: string;
  color: string; // Placeholder color for the visual
}

const projects: Project[] = [
  {
    id: 'dams',
    number: '01',
    title: 'DAMS',
    status: 'CURRENTLY BUILDING',
    description: 'Dynamic Alertness Monitoring System Using Behavioural Pattern Analysis.',
    details: 'Computer vision based system designed to monitor driver alertness using behavioural patterns.',
    technologies: ['Computer Vision', 'OpenCV', 'EAR', 'MAR', 'Head Pose', 'Behavioural Pattern Analysis'],
    color: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'student-notes',
    number: '02',
    title: 'Student Notes Chatbot',
    description: 'AI-powered chatbot that answers questions based on uploaded academic notes.',
    details: 'Contribution: Backend development, API development, document processing and database integration.',
    technologies: ['FastAPI', 'PostgreSQL', 'RAG', 'LangChain'],
    githubUrl: 'https://github.com/srajankulal27-aiml/Student_Notes_Chatbot',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'elephant',
    number: '03',
    title: 'Memory of Elephant vs Intelligence of Machine',
    description: 'System designed to detect elephants entering agricultural areas and alert administrators to support human-elephant conflict prevention.',
    details: 'Co-authored and submitted a conference paper based on this research and implementation.',
    technologies: ['Python', 'Computer Vision'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'intellistock',
    number: '04',
    title: 'IntelliStock',
    description: 'AI-based inventory management system for monitoring stock levels, analyzing inventory data and generating stock insights.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Machine Learning'],
    githubUrl: 'https://github.com/srajankulal27-aiml/Inventory_Management',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'movie-rec',
    number: '05',
    title: 'Movie Recommendation System',
    description: 'Content-based recommendation system using text feature extraction and cosine similarity.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    color: 'from-pink-500 to-rose-500',
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Simple scroll spy to update active project
  // In a real scenario with very tall sections, IntersectionObserver is better, 
  // but framer motion's onUpdate is clean here.
  scrollYProgress.on("change", (latest) => {
    // 5 projects -> each takes ~0.2 of the progress
    const step = 1 / projects.length;
    const index = Math.min(Math.floor(latest / step), projects.length - 1);
    setActiveProject(index);
  });

  return (
    <Section id="projects" className="bg-[#fdfdfd] pt-32 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter mb-6">FEATURED PROJECTS</h2>
          <p className="text-xl text-slate-600 font-medium">
            Selected works in artificial intelligence, machine learning, and computer vision.
          </p>
        </motion.div>
      </div>

      {/* Sticky Scroll Container */}
      <div ref={containerRef} className="relative w-full h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-16 h-full items-center py-24">
            
            {/* Left side: Text Content */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl font-bold text-slate-200">{projects[activeProject].number}</span>
                    <div className="h-[2px] w-12 bg-violet-600"></div>
                  </div>

                  {projects[activeProject].status && (
                    <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700 font-semibold tracking-wide px-3 py-1 mb-4">
                      {projects[activeProject].status === 'CURRENTLY BUILDING' && (
                        <span className="mr-2 h-2 w-2 rounded-full bg-violet-500 animate-pulse inline-block"></span>
                      )}
                      {projects[activeProject].status}
                    </Badge>
                  )}

                  <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tighter leading-tight group">
                    {projects[activeProject].title}
                  </h3>

                  <p className="text-xl text-slate-600 font-medium leading-relaxed">
                    {projects[activeProject].description}
                  </p>

                  {projects[activeProject].details && (
                    <p className="text-base text-slate-500 border-l-2 border-slate-200 pl-4">
                      {projects[activeProject].details}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4">
                    {projects[activeProject].technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-8">
                    {projects[activeProject].githubUrl && (
                      <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-600 transition-colors group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        View Code
                        <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                    {projects[activeProject].liveUrl && (
                      <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-600 transition-colors group">
                        <ExternalLink size={20} />
                        Live Demo
                        <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Sticky Visual */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 hidden lg:block group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className={cn("absolute inset-0 bg-gradient-to-br w-full h-full flex flex-col items-center justify-center p-8 text-white", projects[activeProject].color)}
                >
                  {/* Placeholder for actual project images */}
                  <div className="w-full h-full border-2 border-white/20 rounded-2xl bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <span className="text-white/50 font-medium tracking-widest uppercase mb-4 text-sm">Project Visual Placeholder</span>
                    <span className="text-3xl font-bold tracking-tighter text-center max-w-sm">
                      {projects[activeProject].title} UI
                    </span>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Mobile Visual Equivalent (Shown inline, not sticky) */}
            <div className="w-full lg:hidden h-[300px] relative rounded-3xl overflow-hidden shadow-lg mt-8">
               <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={cn("absolute inset-0 bg-gradient-to-br w-full h-full flex flex-col items-center justify-center p-6 text-white", projects[activeProject].color)}
                >
                  <div className="w-full h-full border border-white/20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-center">
                    <span className="text-xl font-bold tracking-tighter">
                      {projects[activeProject].title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
