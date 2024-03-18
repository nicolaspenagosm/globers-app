import { IContact } from '../../types/shared';

export type OverviewState = {
  overviewRequestStatus: string | null;
  firstFavoritesContacs: IContact[];
  firstContacts: IContact[];
  errorMsg: string | null;
};
