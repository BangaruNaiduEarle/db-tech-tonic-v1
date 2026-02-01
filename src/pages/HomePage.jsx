import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProductCatalog from '../components/ProductCatalog';
import UnlockingSoftware from '../components/UnlockingSoftware';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromoGrid from '../components/PromoGrid';
import Banners from '../components/Banners';
import PromoHighlights from '../components/PromoHighlights';
import TrustFeatures from '../components/TrustFeatures';
import CategoryTiles from '../components/CategoryTiles';
import FeaturedCarousel from '../components/FeaturedCarousel';
import PromoBanner from '../components/PromoBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustHighlights from '../components/TrustHighlights';

import homepageData from '../data/homepageData';

function HomePage() {
  return (
    <div className="App ">
      <Banners herobanners={homepageData.heroBanners} />
      {/* <Hero /> */}
      <main >
        <div className=' max-w-7xl mx-auto'>
          <TrustFeatures />
          <CategoryTiles categories={homepageData.categories} />
          <FeaturedCarousel featuredProductCarousel={homepageData.featuredProductCarousel} />
          <TrustHighlights />
        </div>
        <PromoGrid promos={homepageData.promoGrid} />
        <div className=' max-w-7xl mx-auto'>
          <UnlockingSoftware />
          <ProductCatalog products={homepageData.featuredProducts} />
          <Contact />
        </div>
      </main>

    </div>
  );
}

export default HomePage;
