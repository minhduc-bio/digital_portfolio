import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Định hướng nghiên cứu & học tập', href: '#research' },
  { label: 'Kho lưu trữ bài tập số', href: '#projects' },
  { label: 'Tổng kết', href: '#reflection'},
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#f9f8f5]/95 backdrop-blur-sm py-5' : 'py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-noto-serif text-[#2c3e50] tracking-tight hover:text-[#6b8f71] transition-colors"
        >
          BÙI MINH ĐỨC
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm text-[#6b7280] hover:text-[#3d3d3d] transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex gap-6">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm text-[#6b7280] hover:text-[#3d3d3d] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
