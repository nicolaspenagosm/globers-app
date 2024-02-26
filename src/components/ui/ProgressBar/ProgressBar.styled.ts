import styled from 'styled-components';
import { ProgressBarProps } from './ProgressBar';

export const StyledProgressBar = styled.span<ProgressBarProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  display: inline-block;
  position: relative;
  background: ${({ theme }) => theme.colors.secondary600};
  overflow: hidden;

  &:after {
    content: '';
    box-sizing: border-box;
    width: 0;
    height: ${({ $height }) => $height};
    background: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    animation: animFw 1s linear infinite;
  }

  @keyframes animFw {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
