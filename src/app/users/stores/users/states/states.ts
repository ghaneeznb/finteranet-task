import { IUser } from "src/app/users/models/user.model";

export interface IUserState {
    items: Array<IUser>;
    selected: IUser | null;
    error: string;
    success: string;
}

export const initialUsersState: IUserState = {
    items: [],
    selected: null,
    error: '',
    success: '',
};