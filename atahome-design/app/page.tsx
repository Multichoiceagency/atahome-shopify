import HeroSlider from '@/components/HeroSlider';
import Categories from '@/components/Categories';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <Header />
      <HeroSlider />
      <Categories />
      <Footer />
    </main>
  );
}
