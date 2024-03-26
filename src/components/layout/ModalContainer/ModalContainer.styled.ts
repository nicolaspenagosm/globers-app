import styled from 'styled-components';

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;

  body{
    overflow-y: hidden;
  }
`;
export const Backdrop = styled(AbsoluteContainer)`
  cursor: pointer;
`;

export const RootContainer = styled(AbsoluteContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const StyledModalContainer = styled.div`
  z-index: 200;
  width: 30%;
`;
