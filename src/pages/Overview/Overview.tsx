import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedUser } from '../../store/auth/selectors';
import { StyledOverview } from './Overview.styled';
import ContactsGrid from '../../components/contacts/ContactsGrid';
import SectionSeparator from '../../components/contacts/SectionSeparator';
import { useAppDispatch } from '../../store';
import { fetchOverviewData } from '../../store/overview/actions';
import {
  selectContacts,
  selectFavContacts,
} from '../../store/overview/selectors';

const Overview: React.FC = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const dispatch = useAppDispatch();
  const favContacts = useSelector(selectFavContacts);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (loggedUser && (favContacts.length === 0 || contacts.length === 0)) {
      dispatch(fetchOverviewData({ userId: loggedUser!.id! }));
    }
  }, [loggedUser, favContacts, contacts]);

  return (
    <StyledOverview>
      <SectionSeparator label="Favorites" />
      <ContactsGrid contacts={favContacts} />
      <SectionSeparator label="Contact List" />
      <ContactsGrid contacts={contacts} />
    </StyledOverview>
  );
};

export default Overview;
