import { Layout } from '../../components/Shared/Layout';
import { Hero } from '../../components/Hero';
import { MainSection } from '../../components/MainSection';
import { FeaturedCollection } from '../../components/FeaturedCollection';

export function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
}
