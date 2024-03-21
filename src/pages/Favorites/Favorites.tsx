import { useSelector } from 'react-redux';
import SectionSeparator from '../../components/contacts/SectionSeparator';
import PageContainer from '../../components/layout/PageContainer';
import { selectLoggedUser } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import ContactsGrid from '../../components/contacts/ContactsGrid';
import { selectFavContacts } from '../../store/contacts/selectors';
import { fetchFavoriteData } from '../../store/contacts/actions';

const Favorites: React.FC = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const dispatch = useAppDispatch();

  const favContacts = useSelector(selectFavContacts);

  useEffect(() => {
    if (loggedUser && favContacts.length === 0) {
      dispatch(fetchFavoriteData({ userId: loggedUser.id! }));
    }
  }, [loggedUser, favContacts, dispatch]);
  return (
    <PageContainer>
      <SectionSeparator label="Favorites" />
      <ContactsGrid contacts={favContacts} />
    </PageContainer>
  );
};

export default Favorites;
