export interface Entity {
  id: string;
}

export interface Contact extends Entity {
  email: string;
  name: string;
  lastname: string;
  photoUrl: string;
}

export interface User extends Contact {
  chatsKeys: string[];
}

export type Login = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};
