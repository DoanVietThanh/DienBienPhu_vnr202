import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize, Minimize } from 'lucide-react';
import { Quiz, QuizResult, QuizSettings } from '@/types';
import { quizList } from '@/constants/quiz-list';
import QuizQuestion from './quiz-question';
import QuizResults from './quiz-result';
import TabWarning from '../ui/tab-warnings';

interface QuizContainerProps {
  settings: QuizSettings;
  onBack: () => void;
}

export default function QuizContainer({
  settings,
  onBack,
}: QuizContainerProps) {
  const [questions, setQuestions] = useState<Quiz[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(
    settings.timeInMinutes * 60
  );
  const [isFullscreen, setIsFullscreen] = useState(settings.fullscreen);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [showTabWarning, setShowTabWarning] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  // Shuffle and select questions based on settings
  useEffect(() => {
    const shuffled = [...quizList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, settings.numberOfQuestions);
    setQuestions(selected);
  }, [settings.numberOfQuestions]);

  const handleQuizComplete = useCallback(() => {
    setQuizCompleted(true);

    // Calculate results
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer) {
        const correctOption = question.options.find((opt) => opt.isCorrect);
        if (correctOption && userAnswer === correctOption.id) {
          correctCount++;
        } else {
          wrongCount++;
        }
      } else {
        wrongCount++;
      }
    });

    // Calculate time spent
    const endTime = Date.now();
    const timeSpentMs = endTime - startTime;
    const minutes = Math.floor(timeSpentMs / 60000);
    const seconds = Math.floor((timeSpentMs % 60000) / 1000);
    const timeSpentFormatted = `${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;

    // Calculate score (100 points max)
    const score = Math.round((correctCount / questions.length) * 100);

    setQuizResult({
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      timeSpent: timeSpentFormatted,
      score: score,
    });
  }, [questions, userAnswers, startTime]);

  // Timer countdown
  useEffect(() => {
    if (quizCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleQuizComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleQuizComplete, quizCompleted]);

  // Tab visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !quizCompleted) {
        setShowTabWarning(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [quizCompleted]);

  // Fullscreen handling
  useEffect(() => {
    if (settings.fullscreen && !isFullscreen) {
      toggleFullscreen();
    }
  }, [isFullscreen, settings.fullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleSelectAnswer = (optionId: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleRetry = () => {
    // Reset everything
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setTimeRemaining(settings.timeInMinutes * 60);
    setQuizCompleted(false);
    setQuizResult(null);
    setStartTime(Date.now());

    // Reshuffle questions
    const shuffled = [...quizList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, settings.numberOfQuestions);
    setQuestions(selected);
  };

  const handleCloseResults = () => {
    // Exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    onBack();
  };

  if (questions.length === 0) {
    return (
      <div className='flex justify-center items-center h-64'>Đang tải...</div>
    );
  }

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <Button variant='outline' onClick={onBack}>
          Quay lại
        </Button>
        <Button variant='outline' onClick={toggleFullscreen}>
          {isFullscreen ? (
            <>
              <Minimize className='h-4 w-4 mr-2' /> Thu nhỏ
            </>
          ) : (
            <>
              <Maximize className='h-4 w-4 mr-2' /> Toàn màn hình
            </>
          )}
        </Button>
      </div>

      <QuizQuestion
        question={questions[currentQuestionIndex]}
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        selectedAnswer={userAnswers[currentQuestionIndex] || null}
        onSelectAnswer={handleSelectAnswer}
        onNextQuestion={handleNextQuestion}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        timeRemaining={timeRemaining}
      />

      {quizResult && (
        <QuizResults
          result={quizResult}
          isOpen={quizCompleted}
          onClose={handleCloseResults}
          onRetry={handleRetry}
        />
      )}

      <TabWarning
        isOpen={showTabWarning}
        onClose={() => setShowTabWarning(false)}
      />
    </div>
  );
}
