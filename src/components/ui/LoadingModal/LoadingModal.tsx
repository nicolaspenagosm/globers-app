import { StyledLoadingModal } from './LoadingModal.styled';
import altLogo from '../../../assets/globant-alt-logo.png';
import ProgressBar from '../ProgressBar';

export const LoadingModal: React.FC = () => {
  return (
    <StyledLoadingModal>
      <img src={altLogo} alt="App is loading" draggable={false} />
      <ProgressBar $height="0.35rem" $width="14rem" />
    </StyledLoadingModal>
  );
};

export default LoadingModal;
