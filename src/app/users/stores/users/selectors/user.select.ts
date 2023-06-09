import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/store/states/app.state";
import { IUserState } from "../states/states";

const selectUser = (state: IAppState) => state.users;

export const GetAllUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.items
);

export const GetErrorUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.error
);

export const GetSuccessUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.success
);

export const GetFilterUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.filteredUsers
);