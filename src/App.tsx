import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-gray-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
