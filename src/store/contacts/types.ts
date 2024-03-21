import { IContact } from '../../types/shared';

export interface ContactsState {
  favContactsOverview: IContact[];
  contactsOverview: IContact[];
  favContacts: IContact[];
  contacts: IContact[];
  requestErrorMsg: string | null;
  requestStatus: string | null;
  favoritesPageIndex: number;
  contactsPageIndex: number;
}
