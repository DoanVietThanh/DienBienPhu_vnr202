import { useEffect, useState } from 'react';
import { ArrowUp, FileQuestion, Home } from 'lucide-react';
import { useNavigate } from 'react-router';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './button';
import ChatWidget from './chat-widget';

type Props = {
  isShownTopButton: boolean;
  isShownQuizButton: boolean;
  isShownHomeButton: boolean;
};

const FloatingButtons = ({
  isShownHomeButton = false,
  isShownQuizButton = false,
  isShownTopButton = false,
}: Props) => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='fixed bottom-6 right-6 flex flex-col gap-4 z-50'>
      {isShownTopButton && showButton && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size='icon'
                onClick={scrollToTop}
                className='bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300'
              >
                <ArrowUp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cuộn lên đầu trang</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {isShownQuizButton && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size='icon'
                onClick={() => navigate('/quiz')}
                className='bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300'
              >
                <FileQuestion />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Câu hỏi ôn tập</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {isShownQuizButton && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ChatWidget />
            </TooltipTrigger>
            <TooltipContent>
              <p>Chat AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {isShownHomeButton && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size='icon'
                onClick={() => navigate('/')}
                className='bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition duration-300'
              >
                <Home />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Trang chủ</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default FloatingButtons;
