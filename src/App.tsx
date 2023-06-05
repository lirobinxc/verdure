import './App.css';
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
      <Spacer size="lg" bgColor="darkGreen" />
      <FeaturesPanel tagline="Features" />
      <div className="flex h-full items-center justify-center bg-[#063347] text-center text-white">
        WIP
      </div>
    </>
  );
}

export default App;
