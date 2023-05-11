import { UsersReducer } from "src/app/users/stores/users/reducers/user.reducers";
import { IAppState } from "../states/app.state";
import { ActionReducerMap } from "@ngrx/store";

export const appReducers: ActionReducerMap<IAppState, any> = {
    users: UsersReducer
};