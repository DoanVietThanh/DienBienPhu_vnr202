import Banner from '@/components/events/banner';
import FloatingButtons from '@/components/ui/floating-controls';
import Footer from '@/components/ui/footer';
import WarAmericanAce from '@/components/ui/war-american-ace';
import WarArts from '@/components/ui/war-arts';
import WarDamages from '@/components/ui/war-damages';
import WarDevelopment from '@/components/ui/war-development';
import WarQuotes from '@/components/ui/war-quotes';
import WarVietnameseAce from '@/components/ui/war-vietnamese-ace';

export default function HomePage() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-white'>
      <Banner />
      <WarDevelopment />
      {/* Dàn trận _ Văn */}
      <WarAmericanAce />
      <WarVietnameseAce />
      {/* Đối mặt _ Văn*/}
      {/* Đáp trả _ Văn*/}
      <WarArts />
      <WarDamages />
      <WarQuotes />
      <Footer />
      <FloatingButtons
        isShownTopButton={true}
        isShownQuizButton={true}
        isShownHomeButton={false}
      />
    </main>
  );
}
