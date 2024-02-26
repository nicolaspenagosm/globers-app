import styled from 'styled-components';

export const StyledLoginPage = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary700};

  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    flex-direction: row;
    padding-top: 0rem;
    padding-bottom: 0rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Main = styled.main`
  margin-top: auto;
  margin-bottom: auto;

  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    width: 50%;

    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

export const Div = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    text-align: left;
    margin-top: 1rem;
    margin-left: 0.25rem;
  }
`;

export const Img = styled.img`
  width: 18rem;
  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    width: 20rem;
  }
`;

export const Header = styled.header`
  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary700};
  }
`;
