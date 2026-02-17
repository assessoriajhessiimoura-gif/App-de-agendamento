import Header from './components/Header';
import Hero from './components/Hero';
import Procedimentos from './components/Procedimentos';
import Curso from './components/Curso';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Procedimentos />
      <Curso />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;
