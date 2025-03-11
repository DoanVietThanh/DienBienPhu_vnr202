import { Outlet } from 'react-router';
const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
