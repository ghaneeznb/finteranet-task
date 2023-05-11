import { Action, createReducer, on } from "@ngrx/store";
import { GetUsersAction, GetUsersFailureAction, GetUsersSuccessAction } from "../actions/users.action";
import { IUserState, initialUsersState } from "../states/states";

const UsersReducerInternal = createReducer(
    initialUsersState,
    on(GetUsersAction, (state) => ({
        ...state,
        selected: null,
        error: '',
        success: '',
    })),

    on(GetUsersSuccessAction, (state, { payload }) => ({
        ...state,
        items: [...payload],
    })),

    on(GetUsersFailureAction, (state, { message }) => ({
        ...state,
        error: message,
    })),
);

export function UsersReducer(
    state: IUserState | undefined,
    action: Action
) {
    return UsersReducerInternal(state, action);
}