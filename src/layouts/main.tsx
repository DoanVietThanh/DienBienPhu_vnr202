import { Outlet } from 'react-router';
const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Outlet />
    </div>
  );
};

export default MainLayout;
