import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-8 border-t border-[#e5e4df]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-base text-[#8494a7] mb-4">
            {currentYear} - BÙI MINH ĐỨC
          </p>
          <p className="text-base text-[#a8c4ae] whitespace-pre-line leading-relaxed">
{`“Bởi vì không có nỗ lực nào mà không đi kèm sai lầm và thiếu sót; nhưng chính người thật sự dấn thân hành động mới là người hiểu được những nhiệt huyết lớn lao, những cống hiến lớn lao; người sẵn sàng dành trọn bản thân mình cho một mục đích xứng đáng.”
— trích Daring Greatly của Brené Brown — `}
</p>
        </motion.div>
      </div>
    </footer>
  );
}

