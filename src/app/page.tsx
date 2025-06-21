import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import NewsGrid from '@/components/NewsGrid';
import ConnectBanner from '@/components/ConnectBanner';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <NewsGrid />
            <ConnectBanner />
        </Layout>
    );
}
