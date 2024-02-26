import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../../store/index';

import { useSelector } from 'react-redux';
import { ROOT_PATHS } from '../../../resources/routes';
import NavigationBar from '../../../components/layout/NavigationBar/NavigationBar';

const PrivateRoutes: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);
  return loggedUser ? (
    <main>
      <NavigationBar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={ROOT_PATHS.auth} />
  );
};

export default PrivateRoutes;
