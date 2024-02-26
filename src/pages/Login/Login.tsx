import { StyledLoginPage, Main, Div, H3, Img, Header } from './Login.styled';
import globantLogo from './../../assets/globant-logo.png';
import LoginForm from '../../components/auth/LoginForm';
import { LinkButton } from '../../components/ui/LinkButton/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROOT_PATHS } from '../../resources/routes';
import { useEffect, useState } from 'react';
import LoadingModal from '../../components/ui/LoadingModal';
import { createPortal } from 'react-dom';

const LOADING_MODAL_MIN_DURATION = 500;

const Login: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screenIsMobile = useSelector(
    (state: RootState) => state.ui.screenIsMobile,
  );

  const [showLoadingModal, setShowLoadingModal] = useState(true);
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  useEffect(() => {
    if (loggedUser === null || loggedUser) {
      setTimeout(() => {
        setShowLoadingModal(false);
        if (loggedUser) navigate('/');
      }, LOADING_MODAL_MIN_DURATION);
    }

  }, [loggedUser, navigate]);

  const loginCopy = (
    <H3>
      Let’s connect with <br />
      your coworkers and clients!
    </H3>
  );

  const isSingingUp = location.pathname === ROOT_PATHS.signUp;

  return (
    <>
      {showLoadingModal && createPortal(<LoadingModal />, document.body)}
      <StyledLoginPage>
        <Header>
          <div>
            <Img src={globantLogo} draggable={false} alt="Globant logo" />
            {!screenIsMobile && loginCopy}
          </div>
        </Header>
        <Main>
          {screenIsMobile && loginCopy}
          <LoginForm isSigningUp={isSingingUp} />
          <Div>
            {isSingingUp ? "Don't have an account? " : 'Have an account? '}
            <LinkButton
              label={isSingingUp ? 'Login' : 'Sign up'}
              to={isSingingUp ? ROOT_PATHS.auth : ROOT_PATHS.signUp}
            />
          </Div>
        </Main>
      </StyledLoginPage>
    </>
  );
};

export default Login;
