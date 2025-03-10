'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import type { Quiz } from '@/types';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: Quiz;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (optionId: number) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  timeRemaining: number;
}

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
  timeRemaining,
}: QuizQuestionProps) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(Math.floor(timeRemaining / 60));
    setSeconds(timeRemaining % 60);
  }, [timeRemaining]);

  return (
    <Card className='w-full max-w-3xl mx-auto'>
      <CardContent className='pt-6'>
        <div className='flex justify-between items-center mb-4'>
          <div className='text-sm font-medium'>
            Câu hỏi {currentIndex + 1}/{totalQuestions}
          </div>
          <div
            className={cn(
              'text-sm font-medium',
              timeRemaining < 60 ? 'text-red-500' : ''
            )}
          >
            Thời gian còn lại: {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>

        <h3 className='text-xl font-semibold mb-6'>{question.question}</h3>

        <RadioGroup className='space-y-3' value={selectedAnswer?.toString()}>
          {question.options.map((option) => (
            <div
              key={option.id}
              onClick={() => onSelectAnswer(option.id)}
              className={cn(
                'flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors',
                selectedAnswer === option.id
                  ? 'bg-primary/10 border-primary'
                  : 'hover:bg-muted'
              )}
            >
              <div
                className={cn(
                  'h-5 w-5 rounded-full border flex items-center justify-center',
                  selectedAnswer === option.id
                    ? 'border-primary bg-primary'
                    : ''
                )}
              >
                {selectedAnswer === option.id && (
                  <div className='h-2.5 w-2.5 rounded-full bg-white' />
                )}
              </div>
              <div className='text-base'>{option.text}</div>
            </div>
          ))}
        </RadioGroup>

        <div className='mt-6 flex justify-end'>
          <Button onClick={onNextQuestion} disabled={selectedAnswer === null}>
            {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp theo'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
