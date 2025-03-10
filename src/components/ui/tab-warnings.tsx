import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface TabWarningProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TabWarning({ isOpen, onClose }: TabWarningProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <AlertTriangle className='h-5 w-5 text-yellow-500' />
            Cảnh báo
          </DialogTitle>
          <DialogDescription>
            Bạn đã chuyển ra khỏi tab làm bài kiểm tra. Vui lòng không chuyển
            tab trong quá trình làm bài.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Quay lại làm bài</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
