import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const researchAreas = [
  {
    title: 'SINH HỌC TÍNH TOÁN',
    description:
      'Ứng dụng các phương pháp tính toán để khám phá và mô hình hóa các hệ sinh học phức tạp, từ dữ liệu phân tử đến các quá trình ở cấp độ hệ thống.',
  },
  {
    title: 'Sinh học thống kê',
    description:
      'Khai thác các phương pháp thống kê và suy luận dữ liệu để hiểu rõ hơn các hiện tượng sinh học và hỗ trợ nghiên cứu dựa trên bằng chứng.',
  },
  {
    title: 'Khoa học thần kinh',
    description:
      'Nghiên cứu hệ thần kinh từ cấp độ tế bào đến hành vi và nhận thức, nhằm hiểu cơ chế hoạt động của não bộ và ứng dụng trong y học, tâm lý học và công nghệ.',
  },
  {
    title: 'Khoa học hành vi',
    description:
      'Nghiên cứu các yếu tố sinh học, nhận thức và môi trường ảnh hưởng đến hành vi con người, với trọng tâm là khả năng giải thích và ứng dụng thực tiễn.',
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="research" className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-base text-[#8494a7] tracking-[0.2em] uppercase mb-6">
            ĐỊNH HƯỚNG NGHIÊN CỨU & HỌC TẬP
          </p>
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] font-noto-serif mb-6">
            LĨNH VỰC TẬP TRUNG
          </h2>
          <div className="w-16 h-px bg-[#a8c4ae]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl text-[#a8c4ae] font-mono mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-noto-serif text-[#3d3d3d] mb-3 group-hover:text-[#6b8f71] transition-colors uppercase">
                    {area.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed text-[15px]">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
