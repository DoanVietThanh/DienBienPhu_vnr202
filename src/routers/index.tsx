import MainLayout from '@/layouts/main';
import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/not-found';
import QuizPage from '@/pages/quiz';
import { Route, Routes } from 'react-router';

const AppRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouters;
