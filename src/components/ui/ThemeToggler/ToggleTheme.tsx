import { useSelector } from 'react-redux';
import { selectIsLightTheme } from '../../../store/ui/selectors';
import { useAppDispatch } from '../../../store';
import { uiActions } from '../../../store/ui/slice';
import { Styles } from '../../../App.styled';

const ThemeToggler: React.FC<{ absolute: boolean }> = ({ absolute }) => {
  const isLightTheme = useSelector(selectIsLightTheme);
  const dispatch = useAppDispatch();
  const styles = absolute
    ? { position: 'absolute', top: '10px', right: '10px' }
    : null;
  return (
    <div style={styles}>
      <button
        onClick={() => {
          dispatch(uiActions.setIsLightTheme(!isLightTheme));
        }}
      >
        {isLightTheme ? 'to dark' : 'to light'}
      </button>
    </div>
  );
};

export default ThemeToggler;
