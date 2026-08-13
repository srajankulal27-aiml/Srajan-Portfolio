import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'PROGRAMMING',
    items: ['Python', 'SQL', 'C', 'C++', 'Java', 'HTML', 'CSS', '.NET']
  },
  {
    category: 'FRAMEWORKS',
    items: ['Django', 'FastAPI', 'Flask', 'RAG', 'Streamlit']
  },
  {
    category: 'LIBRARIES / TOOLS',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'SQLAlchemy', 'LangChain', 'OpenCV', 'Git', 'GitHub', 'Docker']
  },
  {
    category: 'DATA / VISUALIZATION',
    items: ['Microsoft Excel', 'Tableau', 'Power BI']
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-900 sticky top-32"
            >
              TECH STACK
            </motion.h2>
          </div>

          <div className="lg:w-2/3 space-y-16">
            {skillsData.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: groupIndex * 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
                <h3 className="text-sm font-semibold text-violet-600 tracking-widest uppercase">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (itemIndex * 0.05) }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="text-xl sm:text-2xl font-bold text-slate-400 hover:text-slate-900 transition-colors cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
                
                {groupIndex !== skillsData.length - 1 && (
                  <div className="w-full h-px bg-slate-100 mt-8"></div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
