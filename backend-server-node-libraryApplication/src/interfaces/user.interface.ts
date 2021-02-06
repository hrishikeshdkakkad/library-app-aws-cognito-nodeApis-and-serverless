interface ICart {
  _id: string;
  title: string;
}

export interface IUser {
  username: string;
  items: ICart[];
}
