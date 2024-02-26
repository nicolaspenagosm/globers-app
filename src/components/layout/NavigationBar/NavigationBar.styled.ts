import styled from 'styled-components';

export const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow:
  ${({ theme }) => theme.colors.shadow} 0px 6px 24px 0px,
  ${({ theme }) => theme.colors.shadow}  0px 0px 0px 1px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;

  li {
    height: 100%;
    a {
      text-decoration: none;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text300};
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

export const UserDataSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    font-weight: 600;
  }
  H6{
    color: ${({ theme }) => theme.colors.text300};
  }
`;
