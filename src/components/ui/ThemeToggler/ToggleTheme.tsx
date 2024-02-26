import { useSelector } from 'react-redux';
import { selectIsLightTheme } from '../../../store/ui-slice/selectors';
import { useAppDispatch } from '../../../store';
import { uiActions } from '../../../store/ui-slice/ui-slice';

const ThemeToggler: React.FC = () => {
  const isLightTheme = useSelector(selectIsLightTheme);
  const dispatch = useAppDispatch();

  return (
    <div>
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
