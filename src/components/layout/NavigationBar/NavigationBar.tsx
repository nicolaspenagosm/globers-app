import { Link } from 'react-router-dom';
import { NavList, StyledNavigationBar } from './NavigationBar.styled';
import { ROOT_PATHS } from '../../../resources/routes';
import Button from '../../ui/Button';
import addIcon from '../../../assets/add-icon.png';

const NavigationBar: React.FC = () => {
  return (
    <StyledNavigationBar>
      <div>Hola</div>
      <NavList>
        <li>
          <Link to={ROOT_PATHS.overview}>Overview</Link>
        </li>
        <li>
          <Link to={ROOT_PATHS.contacts}>Contacts</Link>
        </li>
        <li>
          <Link to={ROOT_PATHS.favorites}>Favorites</Link>
        </li>
        <Button
          label="New"
          hasPrimaryStyle={true}
          type="button"
          color="action"
          icon={addIcon}
        />
      </NavList>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
