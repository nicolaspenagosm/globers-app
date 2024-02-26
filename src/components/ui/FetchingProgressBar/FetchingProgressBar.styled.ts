import styled from 'styled-components';

export const StyledFetchingProgressBar = styled.div`
  position: absolute;
  top: 0;
  height: 4px;
  width: 100%;
  --c: no-repeat linear-gradient(${({ theme }) => theme.colors.accent700} 0 0);
  background: var(--c), var(--c), ${({ theme }) => theme.colors.accentEmphasis};
  background-size: 60% 100%;
  animation: anim 0.75s infinite;

  @keyframes anim {
    0% {
      background-position:
        -150% 0,
        -150% 0;
    }

    100% {
      background-position:
        250% 0,
        250% 0;
    }
  }
`;
