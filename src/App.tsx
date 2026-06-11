import BackgroundPattern from './components/BackgroundPattern';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Research from './components/Research';
import Projects from './components/Projects';
import Reflection from './components/Reflection';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#f9f8f5]">
      <BackgroundPattern />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Research />
        <Projects />
        <Reflection />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
