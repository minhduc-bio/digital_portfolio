import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const toolkit = {
  languages: [
    { name: 'Python', level: 'Sơ cấp' },
    { name: 'R', level: 'Thành thạo' },
  ],
  tools: [
    { name: 'Obsidian', desc: 'Quản lý kiến thức' },
    { name: 'Notion', desc: 'Quản lý dự án, đời sống' },
  ],
};

export default function Toolkit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="toolkit" className="relative py-32 px-8 bg-[#f2f1ec]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs text-[#8494a7] tracking-[0.2em] uppercase mb-6">
            Kỹ năng cá nhân
          </p>
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] font-noto-serif mb-6">
            Toolkit
          </h2>
          <div className="w-16 h-px bg-[#a8c4ae]" />
        </motion.div>

        {/* Khung chứa 2 cột */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          
          {/* Cột 1: Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm text-[#8494a7] tracking-wider uppercase mb-6">
              Ngôn ngữ lập trình
            </h3>
            <div className="space-y-4">
              {toolkit.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-baseline">
                  <span className="text-[#3d3d3d]">{lang.name}</span>
                  <span className="text-xs text-[#8494a7]">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cột 2: Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} /* Delay 0.2s để xuất hiện hiệu ứng nối tiếp cột 1 */
          >
            <h3 className="text-sm text-[#8494a7] tracking-wider uppercase mb-6">
              CÔNG CỤ - PHẦN MỀM QUẢN LÝ
            </h3>
            <div className="space-y-4">
  {toolkit.tools.map((tool) => (
    <div key={tool.name} className="flex justify-between items-baseline gap-4">
      <span className="text-[#3d3d3d] whitespace-nowrap">{tool.name}</span>
      <span className="text-xs text-[#8494a7] text-right">{tool.desc}</span>
    </div>
  ))}
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}