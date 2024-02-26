import { StyledProgressBar } from './ProgressBar.styled';

export interface ProgressBarProps {
  $width: string;
  $height: string;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ $height, $width }) => {
  return (
    <StyledProgressBar $width={$width} $height={$height}></StyledProgressBar>
  );
};

export default ProgressBar;
