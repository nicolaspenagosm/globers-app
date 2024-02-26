import { Link } from 'react-router-dom';
import { NavList, StyledNavigationBar } from './NavigationBar.styled';
import { ROOT_PATHS } from '../../../resources/routes';
import Button from '../../ui/Button';
import addIcon from '../../../assets/add-icon.png';
import ProfilePciture from '../../ui/ProfilePicture';
import { useSelector } from 'react-redux';
import { selectLoggedUser } from '../../../store/auth-slice/auth-selectors';
import defaultPicture from '../../../assets/default-user-photo.jpeg';
import { UserDataSection } from './NavigationBar.styled';
import ThemeToggler from '../../ui/ThemeToggler';
import logoutIcon from '../../../assets/logout-icon.png';
import { useAppDispatch } from '../../../store';
import { logout } from '../../../store/auth-slice/auth-actions';

const NavigationBar: React.FC = () => {
  const loggedUser = useSelector(selectLoggedUser);
  const profilePictureUrl = loggedUser ? loggedUser.photoUrl : defaultPicture;
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <StyledNavigationBar>
      <UserDataSection>
        <ProfilePciture
          $img={profilePictureUrl}
          $size={'2.75rem'}
          $borderWidth="0"
        />
        <div>
          <h3>{`${loggedUser?.name} ${loggedUser?.lastname}`}</h3>
          <h6>{`${loggedUser?.email}`}</h6>
        </div>
        <Button
          label="Logout"
          icon={logoutIcon}
          hasPrimaryStyle={true}
          type="button"
          color="action"
          onClick={handleLogout}
        />
      </UserDataSection>
      <section>
        <NavList>
          <ThemeToggler />
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
            onClick={() => {}}
          />
        </NavList>
      </section>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
