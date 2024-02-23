import { StyledLoginPage, Main, Div, H3, Img, Header } from './Login.styled';
import globantLogo from './../../assets/globant-logo.png';
import LoginForm from '../../components/auth/LoginForm';
import { LinkButton } from '../../components/ui/LinkButton/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useLocation } from 'react-router-dom';
import { ROOT_PATHS } from '../../resources/routes';

const Login: React.FC = () => {
  const location = useLocation();
  const screenIsMobile = useSelector(
    (state: RootState) => state.ui.screenIsMobile,
  );

  const loginCopy = (
    <H3>
      Let’s connect with <br />
      your coworkers and clients!
    </H3>
  );

  const isSingingUp = location.pathname === ROOT_PATHS.signUp;

  return (
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
            label={isSingingUp ? 'Sign up' : 'Login'}
            to={isSingingUp ? ROOT_PATHS.auth : ROOT_PATHS.signUp}
          />
        </Div>
      </Main>
    </StyledLoginPage>
  );
};

export default Login;
