import { StyledLoadingModal } from './LoadingModal.styled';
import altLogo from '../../../assets/globant-alt-logo.png';
import altWhiteLogo from '../../../assets/globant-alt-white-logo.png';
import ProgressBar from '../ProgressBar';
import { useSelector } from 'react-redux';
import { selectIsLightTheme } from '../../../store/ui/selectors';

export const LoadingModal: React.FC = () => {
  const isLightTheme = useSelector(selectIsLightTheme);
  return (
    <StyledLoadingModal>
      <img
        src={isLightTheme ? altLogo : altWhiteLogo}
        alt="App is loading"
        draggable={false}
      />
      <ProgressBar $height="0.35rem" $width="14rem" />
    </StyledLoadingModal>
  );
};

export default LoadingModal;
