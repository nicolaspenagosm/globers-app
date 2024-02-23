import { StyledLoginPage, Main, P, H3, Img, Header } from './Login.styled';
import globantLogo from './../../assets/globant-logo.png';
import LoginForm from '../../components/auth/LoginForm';
import { LinkButton } from '../../components/ui/LinkButton/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useLocation } from 'react-router-dom';
import { ROOT_PATHS } from '../../App';
const Login: React.FC = () => {
  const screenIsMobile = useSelector(
    (state: RootState) => state.ui.screenIsMobile,
  );
  const location = useLocation();

  const loginCopy = (
    <H3>
      Let’s connect with <br />
      your coworkers and clients!
    </H3>
  );

  const isSingingUp = location.pathname === ROOT_PATHS.signUp;
    //TODO focus on button, change link button to link, best practices, aria label, etc..
  return (
    <StyledLoginPage>
      <Header>
        <div>
          <Img src={globantLogo} draggable={false} />
          {!screenIsMobile && loginCopy}
        </div>
      </Header>
      <Main>
        {screenIsMobile && loginCopy}
        <LoginForm isSigningUp={isSingingUp} />
        <P>
          Are you not registered?
          <LinkButton
            label="Create a new account"
            onClick={() => {
              console.log('onClick');
            }}
          />
        </P>
      </Main>
    </StyledLoginPage>
  );
};

export default Login;
