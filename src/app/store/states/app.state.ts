import { IUserState, initialUsersState } from "src/app/users/stores/users/states/states";

export interface IAppState {
    users: IUserState;
}

export const initialAppState: IAppState = {
    users: initialUsersState,
};