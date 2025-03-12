import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import type {QuizResult} from "@/types";
import {CheckCircle, XCircle, Clock, Award} from "lucide-react";

interface QuizResultsProps {
  result: QuizResult;
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export default function QuizResults({
  result,
  isOpen,
  onClose,
  onRetry,
}: QuizResultsProps) {
  const {correctAnswers, wrongAnswers, timeSpent, score} = result;
  const totalQuestions = correctAnswers + wrongAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Kết quả bài kiểm tra
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="text-5xl font-bold mb-2">{percentage}%</div>
            <div className="text-muted-foreground">Điểm số của bạn</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
              <div className="text-xl font-semibold">{correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Câu đúng</div>
            </div>

            <div className="flex flex-col items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <XCircle className="h-6 w-6 text-red-500 mb-2" />
              <div className="text-xl font-semibold">{wrongAnswers}</div>
              <div className="text-sm text-muted-foreground">Câu sai</div>
            </div>

            <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Clock className="h-6 w-6 text-blue-500 mb-2" />
              <div className="text-xl font-semibold">{timeSpent}</div>
              <div className="text-sm text-muted-foreground">Thời gian</div>
            </div>

            <div className="flex flex-col items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Award className="h-6 w-6 text-yellow-500 mb-2" />
              <div className="text-xl font-semibold">{score}</div>
              <div className="text-sm text-muted-foreground">Điểm</div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between">
          <Button variant="outline" onClick={onClose}>
            Đóng
          </Button>
          <Button onClick={onRetry}>Làm lại</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
