import { useEffect } from 'react';
import { DARK_MODE, MODE_KEY, LIGHT_MODE } from '../store/ui/slice';
import { useSelector } from 'react-redux';
import { selectIsLightTheme } from '../store/ui/selectors';

const useDarkMode = () => {
  const isLightTheme = useSelector(selectIsLightTheme);

  useEffect(() => {
    localStorage.setItem(MODE_KEY, isLightTheme ? LIGHT_MODE : DARK_MODE);
  }, [isLightTheme]);
};

export default useDarkMode;
