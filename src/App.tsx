import Header from "./components/Header";
import Hero from "./components/Hero";
import TryOn from "./components/TryOn";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Marketplaces from "./components/Marketplaces";
import SearchResults from "./components/SearchResults";
import Capsules from "./components/Capsules";
import Community from "./components/Community";
import Rewards from "./components/Rewards";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <TryOn />
        <HowItWorks />
        <Categories />
        <Marketplaces />
        <SearchResults />
        <Capsules />
        <Community />
        <Rewards />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
}
