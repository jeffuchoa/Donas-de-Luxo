import ContactSection from '@/components/ContactSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import PricingSection from '@/components/PricingSection';
import Map from '@/components/Map';
import Carousel from '@/components/Carrosel';
import { EmblaOptionsType } from 'embla-carousel';
import luxo from "../assets/background.png";
import SobreMin from '@/components/SobreMin';
import Produtos from '@/components/Produtos';

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
  "./slide1.jpg",
  "./slide2.jpg",
  "./slide3.jpg",
  "./slide4.jpg",
  "./slide5.jpg",
  "./slide6.jpg",
  "./slide7.jpg",
  "./slide1.jpg",
  "./slide2.jpg",
  "./slide3.jpg",
  "./slide4.jpg",
];



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Carousel slides={SLIDES} options={OPTIONS}/>
        <SobreMin />
        <Produtos />
        <Map />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;