import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center h-screen w-screen'>
      <div className='text-3xl'>Page Not Found</div>
      <Button asChild>
        <Link to='/'>Back to Home Page</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
