import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center">
      {/* Subtle biological motif background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          className="absolute right-0 top-0 w-[60%] h-full opacity-[0.03]"
          preserveAspectRatio="xMaxYMin slice"
        >
          {/* Abstract protein structure / network topology */}
          <g stroke="#6b8f71" fill="none" strokeWidth="0.5">
            {/* Circular nodes */}
            <circle cx="600" cy="100" r="40" />
            <circle cx="700" cy="200" r="25" />
            <circle cx="550" cy="300" r="35" />
            <circle cx="680" cy="400" r="20" />
            <circle cx="500" cy="150" r="15" />
            <circle cx="750" cy="350" r="30" />
            <circle cx="620" cy="500" r="22" />
            {/* Connection lines */}
            <line x1="600" y1="100" x2="700" y2="200" />
            <line x1="600" y1="100" x2="550" y2="300" />
            <line x1="700" y1="200" x2="750" y2="350" />
            <line x1="550" y1="300" x2="680" y2="400" />
            <line x1="680" y1="400" x2="620" y2="500" />
            <line x1="750" y1="350" x2="620" y2="500" />
            <line x1="500" y1="150" x2="600" y2="100" />
            <line x1="550" y1="300" x2="500" y2="150" />
            {/* Alpha helix suggestion */}
            <path d="M 400 200 Q 450 250, 400 300 Q 350 350, 400 400" />
          </g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-24 pb-8 lg:pt-32 lg:pb-12">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <p className=" text-center leading-loose text-base text-[#8494a7] tracking-[0.25em] uppercase mb-8 font-sans">
  K70 TÀI NĂNG SINH HỌC <br /> NHẬP MÔN CNS & ỨNG DỤNG AI<br />VNU1001_E252051
</p>

            <h1 className="text-6xl md:text-6xl lg:text-6xl text-[#2c3e50] mb-10 leading-[1.15] font-noto-serif">
              BÙI MINH ĐỨC
            </h1>

            <div className="space-y-5 max-w-md">
              <p className="text-[20px] text-[#6b7280] leading-[1.8]">
                Portfolio này được xây dựng nhằm ghi lại hành trình học tập, khám phá công nghệ số và phát triển tư duy học thuật của bản thân, đồng thời giới thiệu những dự án, kỹ năng và định hướng nghiên cứu trong lĩnh vực sinh học tính toán và khoa học dữ liệu sinh học.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-14 flex items-center gap-6"
            >
              
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              style={{ y: portraitY }}
              className="relative"
            >
              {/* Atmospheric glow */}
              <div className="absolute inset-0 scale-[1.15] bg-gradient-to-br from-[#a8c4ae]/10 to-[#8494a7]/10 rounded-full blur-3xl" />

              {/* Outer subtle ring */}
              <div className="absolute -inset-3 rounded-full border border-[#e5e4df]" />

              {/* Portrait container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#f2f1ec] to-[#e5e4df]">
                {/* Inner soft border */}
                <div className="absolute inset-0 rounded-full border border-[#d1d1d1]/50" />

                {/* Your Portrait Image */}
                {/* Instructions: Place your image file in the 'public' folder with name 'portrait.jpg' or 'portrait.png' */}
                {/* Then uncomment the img tag below and remove the placeholder div */}
            
                <img
                  src="/png/CamScanner_2025-02-23_00.47-Photoroom.png"
                  alt="Bùi Minh Đức"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale-[30%] sepia-[10%]"
                />
                

                {/* Placeholder content - elegant abstract pattern */}
                

                {/* Actual image placeholder - uncomment and add src when ready
                <img
                  src="/portrait.jpg"
                  alt="Alex Chen"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] sepia-[10%]"
                />
                */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

