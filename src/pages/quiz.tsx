import { useState } from 'react';
import type { QuizSettings as QuizSettingsType } from '@/types';
import QuizSettings from '@/components/quiz/quiz-settings';
import QuizContainer from '@/components/quiz/quiz-container';

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
    <div className='container mx-auto py-8 px-4 bg-slate-900 h-screen w-screen overflow-hidden'>
      <div className='mb-8 text-center'>
        <h1 className='text-2xl font-bold mb-2'>
          Chào mừng bạn đến với Câu hỏi ôn tập về
        </h1>
        <h1 className='text-2xl font-bold'>
          Hà Nội 12 ngày đêm _ Điện Biên Phủ trên không
        </h1>
      </div>

      {!quizStarted ? (
        <QuizSettings onStartQuiz={handleStartQuiz} />
      ) : (
        settings && (
          <QuizContainer settings={settings} onBack={handleBackToSettings} />
        )
      )}
    </div>
  );
}
