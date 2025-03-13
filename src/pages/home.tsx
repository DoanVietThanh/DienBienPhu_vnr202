import Banner from "@/components/events/banner";
import BattleArray from "@/components/ui/battle-array";
import FaceToFace from "@/components/ui/face-to-face";
import FloatingButtons from "@/components/ui/floating-controls";
import Footer from "@/components/ui/footer";
import WarAmericanAce from "@/components/ui/war-american-ace";
import WarArts from "@/components/ui/war-arts";
import WarDamages from "@/components/ui/war-damages";
import WarDevelopment from "@/components/ui/war-development";
import WarQuotes from "@/components/ui/war-quotes";
import WarVietnameseAce from "@/components/ui/war-vietnamese-ace";
import WeResponse from "@/components/ui/we-respond";
import {useEffect} from "react";

export default function HomePage() {
  useEffect(() => {
    const svgElement = document.querySelector(
      "#chatbase-bubble-button > div > svg"
    ) as SVGElement;

    svgElement?.setAttribute("width", "200");
    svgElement?.setAttribute("height", "200");
  }, []);

  return (
    <main>
      <Banner />
      <WarDevelopment />
      <BattleArray />
      <WarAmericanAce />
      <WarVietnameseAce />
      <FaceToFace />
      <WeResponse />
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
