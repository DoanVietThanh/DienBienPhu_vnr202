import { useState } from 'react';
import type { QuizSettings as QuizSettingsType } from '@/types';
import QuizSettings from '@/components/quiz/quiz-settings';
import QuizContainer from '@/components/quiz/quiz-container';
import FloatingButtons from '@/components/ui/floating-controls';

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
    <div className='container mx-auto py-8 px-4 h-screen w-screen overflow-hidden flex justify-center items-center'>
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
  );
}
