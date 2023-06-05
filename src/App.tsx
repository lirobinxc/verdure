import './App.css';
import { AboutPanel } from './components/AboutPanel/AboutPanel.tsx';
import FeaturesPanel from './components/FeaturesPanel.tsx';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Spacer from './components/shared/Spacer';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="Comfort without Compromise"
        subtitle="Find your dream getaway, we'll handle the details."
      />
      <Spacer size="xl" bgColor="darkGreen" />
      <FeaturesPanel tagline="Features" />
      <Spacer size="2xl" bgColor="darkGreen" />
      <Spacer size="2xl" />
      <AboutPanel tagline="About us" />
      {/* <div className="flex h-full items-center justify-center text-center text-white">
        WIP
      </div> */}
    </>
  );
}

export default App;
