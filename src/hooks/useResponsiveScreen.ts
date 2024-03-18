import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui/slice';
import { lightTheme as theme } from '../App.styled';

export const useResponsiveScreen = () => {
  const dispatch = useDispatch();

  useState(() => {
    const handleResize = () => {
  
      const screenIsMobile =
        window.innerWidth <= theme.responsiveBreakpoints.mobile;
      dispatch(uiActions.setScreenIsMobile(screenIsMobile));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
};
