import styled from 'styled-components';

export const StyledNavigationBar = styled.nav`
  position: fixed;
  width: 100%;
  padding:0 4rem 0 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;

  li{
    height: 100%;
    a{
        text-decoration: none;
        font-weight: 600;
        &:hover{
            text-decoration: underline;
        }
    }

  }
`;
