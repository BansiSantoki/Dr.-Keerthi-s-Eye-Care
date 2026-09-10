import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LocationSection } from './components/LocationSection';
import { SocialSection } from './components/SocialSection';

export function App() {
  return (
    <div className="pageShell">
      <div className="pageFrame">
        <Header />
        <LocationSection />
        <SocialSection />
        <Footer />
      </div>
    </div>
  );
}
