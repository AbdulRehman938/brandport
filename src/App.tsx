import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Capabilities from './components/Capabilities';
import WhyPartner from './components/WhyPartner';
import GeographicCoverage from './components/GeographicCoverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Capabilities />
        <WhyPartner />
        <GeographicCoverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
