import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { selectLoggedUser } from '../store/auth/selectors';
import { IContact } from '../types/shared';
import {  AsyncThunk, Dispatch, UnknownAction } from '@reduxjs/toolkit';


type Props = {
  action: AsyncThunk<
    { contacts: IContact[] },
    { userId: string },
    {
      rejectValue: string;
      state?: unknown;
      dispatch?: Dispatch<UnknownAction> | undefined;
      extra?: unknown;
      serializedErrorType?: unknown;
      pendingMeta?: unknown;
      fulfilledMeta?: unknown;
      rejectedMeta?: unknown;
    }
  >;
  selectContacts: (state:RootState) => IContact[];
};

const withAutoLoading = (
  WrappedComponent: React.FC,
  { action, selectContacts }: Props,
) => {
  const WithDispatching: React.FC = () => {

    const loggedUser = useSelector(selectLoggedUser);
    const dispatch = useAppDispatch();
    const dataArr = useSelector(selectContacts);

    useEffect(() => {
      if (loggedUser && dataArr.length === 0) {
        dispatch(action({ userId: loggedUser.id! }));
      }
    }, [loggedUser, dataArr, dispatch]);

    return <WrappedComponent />;
  };

  return WithDispatching;
};

export default withAutoLoading;
