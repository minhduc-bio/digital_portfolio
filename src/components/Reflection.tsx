import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reflections = [
  {
    id: '01',
    text: [
      "Đây không phải là lần đầu tiên em biết đến Portfolio hay xem các portfolio kỹ thuật số của người khác, nhưng là lần đầu tiên em tự xây dựng một portfolio cho bản thân.",

      "Ban đầu, em nghĩ việc tạo một website với giao diện đẹp và hệ thống điều hướng hoàn chỉnh là khá khó. Tuy nhiên, thông qua dự án này, em đã có cơ hội tìm hiểu và sử dụng các công cụ AI hỗ trợ phát triển website, trong đó có Bolt AI. Công cụ này giúp em hiện thực hóa ý tưởng nhanh hơn, đồng thời cho em cái nhìn rõ hơn về cách AI có thể hỗ trợ trong quá trình làm việc.",

      "Điều em học được nhiều nhất là cách làm việc hiệu quả với AI: từ việc xây dựng prompt, chia nhỏ yêu cầu, đánh giá kết quả cho đến chủ động chỉnh sửa mã nguồn thay vì phụ thuộc hoàn toàn vào công cụ. Em cũng được tiếp cận thêm với các khái niệm về thiết kế giao diện, trải nghiệm người dùng và tổ chức thông tin.",

      "Thách thức lớn nhất đối với em là làm sao kết nối các bài tập riêng lẻ thành một Portfolio thống nhất và phản ánh được định hướng cá nhân. Vì vậy, em đã dành nhiều thời gian để lựa chọn cách trình bày, bố cục và phong cách thiết kế phù hợp. Qua dự án này, em không chỉ hoàn thành một sản phẩm học tập mà còn hiểu rõ hơn về cách công nghệ và AI có thể hỗ trợ quá trình học tập và sáng tạo."
    ],
  },
];

export default function Reflection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reflection" className="relative py-24 lg:py-32 px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Tiêu đề Component */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <p className="text-xs text-[#8494a7] tracking-[0.2em] uppercase mb-4">
            Tổng kết
          </p>
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] font-noto-serif mb-6">
            DỰ ÁN CÁ NHÂN
          </h2>
          <div className="w-12 h-px bg-[#a8c4ae]" />
        </motion.div>

        {/* Danh sách các câu quotes */}
        <div className="space-y-16 md:space-y-24">
          {reflections.map((item, index) => (
            <ReflectionQuote 
              key={item.id} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

// Sub-component để xử lý animation độc lập cho từng câu trích dẫn
function ReflectionQuote({ item, index }: { item: any, index: number }) {
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={quoteRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Dấu nháy kép trang trí ở background */}
      <span className="absolute -top-6 left-0 text-6xl text-[#e5e4df] font-noto-serif leading-none select-none">
        &ldquo;
      </span>
      
      {/* Khối nội dung */}
      <div className="relative z-10">
        {/* SỬ DỤNG .map() ĐỂ TÁCH CÁC ĐOẠN VĂN VÀ THÊM KHOẢNG CÁCH (space-y-6) */}
        <div className="mb-6 space-y-6 md:space-y-8">
          {item.text.map((paragraph: string, pIndex: number) => (
            <p 
              key={pIndex} 
              className="text-lg md:text-xl text-[#3d3d3d] font-noto-serif italic leading-relaxed md:leading-[1.8] text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-8">
          <div className="w-8 h-px bg-[#d1d1d1]" />
          <span className="text-base font-mono text-[#8494a7] tracking-widest">
            Bùi Minh Đức - 25001553
          </span>
        </div>
      </div>
    </motion.div>
  );
}