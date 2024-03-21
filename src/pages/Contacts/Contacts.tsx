import { useSelector } from 'react-redux';
import { selectLoggedUser } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import SectionSeparator from '../../components/contacts/SectionSeparator';
import ContactsGrid from '../../components/contacts/ContactsGrid';
import PageContainer from '../../components/layout/PageContainer';
import { selectContacts } from '../../store/contacts/selectors';
import { fetchContactsData } from '../../store/contacts/actions';

const Contacts: React.FC = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const dispatch = useAppDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (loggedUser && contacts.length === 0) {
      dispatch(fetchContactsData({ userId: loggedUser.id! }));
    }
  }, [loggedUser, contacts, dispatch]);

  return (
    <PageContainer>
      <SectionSeparator label="Contact List" />
      <ContactsGrid contacts={contacts} />
    </PageContainer>
  );
};

export default Contacts;
