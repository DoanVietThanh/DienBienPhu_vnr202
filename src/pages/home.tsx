import Hero from '@/components/events/hero';
import Footer from '@/components/ui/footer';
import Timeline from '@/components/ui/timeline';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-900 text-white'>
      <Hero />
      <Timeline />
      <Footer />
    </main>
  );
}
