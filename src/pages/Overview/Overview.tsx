import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedUser } from '../../store/auth/selectors';
import ContactsGrid from '../../components/contacts/ContactsGrid';
import SectionSeparator from '../../components/contacts/SectionSeparator';
import { useAppDispatch } from '../../store';

import PageContainer from '../../components/layout/PageContainer';
import {
  selectContactsOverview,
  selectFavContactsOverview,
} from '../../store/contacts/selectors';
import { fetchOverviewData } from '../../store/contacts/actions';

const Overview: React.FC = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const dispatch = useAppDispatch();
  const favContacts = useSelector(selectFavContactsOverview);
  const contacts = useSelector(selectContactsOverview);

  useEffect(() => {
    if (loggedUser && (favContacts.length === 0 || contacts.length === 0)) {
      dispatch(fetchOverviewData({ userId: loggedUser.id! }));
    }
  }, [loggedUser, favContacts, contacts, dispatch]);

  return (
    <PageContainer>
      <SectionSeparator label="Favorites" />
      <ContactsGrid contacts={favContacts} />
      <SectionSeparator label="Contact List" />
      <ContactsGrid contacts={contacts} />
    </PageContainer>
  );
};

export default Overview;
