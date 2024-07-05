import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { LOGIN_URL } from '../../utils/constants';
import { useAuth } from '../../hooks/useAuth';

const Authentication = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={LOGIN_URL} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default Authentication;