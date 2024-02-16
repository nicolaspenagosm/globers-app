import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../../store/index";

import { useSelector } from "react-redux";
import { ROOT_PATHS } from "../../../App";

const PrivateRoutes: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);
  return loggedUser ? <Outlet /> : <Navigate to={ROOT_PATHS.login} />;
};

export default PrivateRoutes;
