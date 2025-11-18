import { useState } from 'react';
import { Home } from './pages/Home';
import { KopiLuwakLanding } from './pages/KopiLuwakLanding';
import { Business } from './pages/Business';
import { About } from './pages/About';
import { SingleProduct } from './pages/SingleProduct';
import { Agritech } from './pages/Agritech';
import { Fishery } from './pages/Fishery';
import { Farm } from './pages/Farm';
import { WholesaleGreenCoffee } from './pages/WholesaleGreenCoffee';
import { OEMPrivateLabel } from './pages/OEMPrivateLabel';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

type Page = 
  | 'home' 
  | 'kopi-luwak' 
  | 'business' 
  | 'about' 
  | 'product' 
  | 'agritech' 
  | 'fishery' 
  | 'farm' 
  | 'wholesale' 
  | 'oem';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'kopi-luwak':
        return <KopiLuwakLanding onNavigate={setCurrentPage} />;
      case 'business':
        return <Business onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'product':
        return <SingleProduct onNavigate={setCurrentPage} />;
      case 'agritech':
        return <Agritech onNavigate={setCurrentPage} />;
      case 'fishery':
        return <Fishery onNavigate={setCurrentPage} />;
      case 'farm':
        return <Farm onNavigate={setCurrentPage} />;
      case 'wholesale':
        return <WholesaleGreenCoffee onNavigate={setCurrentPage} />;
      case 'oem':
        return <OEMPrivateLabel onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
