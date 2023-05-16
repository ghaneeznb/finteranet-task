import { IUser } from "src/app/users/models/user.model";

export interface IUserState {
    items: Array<IUser>;
    filteredUsers: Array<IUser>;
    error: string;
    success: string;
}

export const initialUsersState: IUserState = {
    items: [],
    filteredUsers: [],
    error: '',
    success: '',
};