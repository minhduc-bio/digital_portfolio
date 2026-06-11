import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, FileText } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'Edu Email',
    href: 'mailto:25001553@hus.edu.vn',
    value: '25001553@hus.edu.vn',
  },
  {
    icon: Mail,
    label: 'Email cá nhân',
    href: 'mailto:minhducb96@gmail.com',
    value: 'minhducb96@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/minhduc-bio',
    value: '@minhduc-bio',
  },
  {
    icon: FileText,
    label: 'Hồ sơ cá nhân',
    // Hãy đặt file CV của bạn vào thư mục public/pdf/ và đổi tên tương ứng ở đây
    href: '/pdf/CV_BUI_MINH_DUC_(1).pdf', 
    value: 'Download PDF',
    download: true, // Thuộc tính này giúp trình duyệt tự động tải file xuống thay vì mở tab mới
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contact" className="relative py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] font-noto-serif mb-6">
            Liên hệ
          </h2>
          <div className="w-16 h-px bg-[#a8c4ae] mx-auto mb-8" />
          <p className="text-[#6b7280] max-w-lg mx-auto">
            Luôn sẵn sàng cho những cơ hội trao đổi, nghiên cứu, và các hướng tiếp cận liên ngành trong sinh học, tin sinh học và khoa học thần kinh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              className="group text-center w-full max-w-[200px]"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#f2f1ec] flex items-center justify-center group-hover:bg-[#6b8f71]/10 transition-colors">
                <link.icon className="w-5 h-5 text-[#8494a7] group-hover:text-[#6b8f71] transition-colors" />
              </div>
              <div className="text-xs text-[#8494a7] mb-1 uppercase tracking-wider">{link.label}</div>
              <div className="text-sm text-[#3d3d3d] group-hover:text-[#6b8f71] transition-colors truncate px-2">
                {link.value}
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}