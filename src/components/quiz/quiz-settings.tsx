import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

import {quizList} from "@/constants/quiz-list";
import type {QuizSettings} from "@/types";
import {useState} from "react";

interface QuizSettingsProps {
  onStartQuiz: (settings: QuizSettings) => void;
}

export default function QuizSettings({onStartQuiz}: QuizSettingsProps) {
  const [settings, setSettings] = useState<QuizSettings>({
    numberOfQuestions: 10,
    timeInMinutes: 5,
    fullscreen: false,
  });

  const handleChange = (field: keyof QuizSettings, value: number | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate settings
    const validatedSettings = {
      ...settings,
      numberOfQuestions: Math.min(
        Math.max(1, settings.numberOfQuestions),
        quizList.length
      ),
      timeInMinutes: Math.max(1, settings.timeInMinutes),
    };

    onStartQuiz(validatedSettings);
  };

  return (
    <Card className="w-full max-w-md mx-auto rounded-md">
      <CardHeader>
        <CardTitle className="text-center">Cài đặt bài kiểm tra</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="numberOfQuestions">
            Số lượng câu hỏi (tối đa {quizList.length})
          </Label>
          <Input
            id="numberOfQuestions"
            type="number"
            min={1}
            max={quizList.length}
            value={settings.numberOfQuestions}
            onChange={(e) =>
              handleChange(
                "numberOfQuestions",
                Number.parseInt(e.target.value) || 1
              )
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeInMinutes">Thời gian làm bài (phút)</Label>
          <Input
            id="timeInMinutes"
            type="number"
            min={1}
            value={settings.timeInMinutes}
            onChange={(e) =>
              handleChange(
                "timeInMinutes",
                Number.parseInt(e.target.value) || 1
              )
            }
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-red-500 hover:bg-red-500/90"
          onClick={handleSubmit}
        >
          Bắt đầu làm bài
        </Button>
      </CardFooter>
    </Card>
  );
}
