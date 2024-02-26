import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../../store/index';
import { Main } from './PrivateRoutes.styled';
import { useSelector } from 'react-redux';
import { ROOT_PATHS } from '../../../resources/routes';
import NavigationBar from '../../../components/layout/NavigationBar/NavigationBar';

const PrivateRoutes: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);
  return loggedUser ? (
    <>
      <NavigationBar />
      <Main>
        <Outlet />
      </Main>
    </>
  ) : (
    <Navigate to={ROOT_PATHS.auth} />
  );
};

export default PrivateRoutes;
