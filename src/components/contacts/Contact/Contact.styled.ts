import styled, { keyframes } from 'styled-components';

export const StyledContact = styled.article`
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow:
    ${({ theme }) => theme.colors.shadow} 0px 10px 15px -3px,
    ${({ theme }) => theme.colors.shadow} 0px 4px 6px -2px;
  height: 16rem;
  width: 100%;
  border-radius: 0.35rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 2rem 1rem 2rem;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    h3 {
      font-weight: 600;
      margin-top: 0.5rem;
      margin-bottom: 0.25rem;
    }
    p {
      color: ${({ theme }) => theme.colors.text300};
    }
    div:last-child{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  hr {
    width: 100%;
    border: solid 0.09rem ${({ theme }) => theme.colors.bgAlt};
    margin-bottom: 1rem;
  }
`;

const loadingAnim = keyframes`
    0% {
      opacity: 1;
    }
    50% {
     opacity: 0.5;
    }
    100% {
     opacity: 1;
    }
`;

export const TextLinePlaceHolder = styled.div`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

  animation: ${loadingAnim} 1s ease-in-out infinite;
`;

