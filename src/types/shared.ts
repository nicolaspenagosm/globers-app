export interface IEntity {
  id?: string;
}

export interface IUser extends IEntity {
  email: string;
  name: string;
  lastname: string;
  photoUrl?: string;
}

export interface IContact extends IUser {
  nameUniqueKey: string;
}

export interface IAuth {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface IHTTPParams {
  [key: string]: string | number;
}
