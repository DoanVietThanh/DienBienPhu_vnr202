import {useState} from "react";
import type {QuizSettings as QuizSettingsType} from "@/types";
import QuizSettings from "@/components/quiz/quiz-settings";
import QuizContainer from "@/components/quiz/quiz-container";
import FloatingButtons from "@/components/ui/floating-controls";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [settings, setSettings] = useState<QuizSettingsType | null>(null);

  const handleStartQuiz = (quizSettings: QuizSettingsType) => {
    setSettings(quizSettings);
    setQuizStarted(true);
  };

  const handleBackToSettings = () => {
    setQuizStarted(false);
  };

  return (
    <div className="relative bg-[url(@/assets/images/bg-cover.png)] bg-no-repeat repeat-0 bg-cover">
      <div className="bg-black/50 inset-0 absolute"></div>
      <div className="relative z-10 container mx-auto py-8 px-4 h-screen w-screen overflow-hidden flex justify-center items-center">
        {!quizStarted ? (
          <QuizSettings onStartQuiz={handleStartQuiz} />
        ) : (
          settings && (
            <QuizContainer settings={settings} onBack={handleBackToSettings} />
          )
        )}
        <FloatingButtons
          isShownTopButton={false}
          isShownQuizButton={false}
          isShownHomeButton={true}
        />
      </div>
    </div>
  );
}
