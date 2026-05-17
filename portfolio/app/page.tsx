import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

export default function Home() {
  return (
    <>
      {/* Fixed full-page background — always behind everything */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-orange-50 via-red-50/60 to-amber-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-400/20 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-orange-400/10 dark:bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Fixed floating particles — behind content but above bg */}
      <FloatingElements />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
