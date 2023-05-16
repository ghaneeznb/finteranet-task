import { Action, createReducer, on } from "@ngrx/store";
import { IFilter } from "src/app/users/models/filters.model";
import { IUser } from "src/app/users/models/user.model";
import { FilterUsersAction, GetUsersAction, GetUsersFailureAction, GetUsersSuccessAction } from "../actions/users.action";
import { IUserState, initialUsersState } from "../states/states";

const UsersReducerInternal = createReducer(
    initialUsersState,
    on(GetUsersAction, (state) => ({
        ...state,
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

    on(FilterUsersAction, (state, { items, payload }) => ({
        ...state,
        filters: filterUsers(items, payload)
    })),
);

export function filterUsers(items: Array<IUser>, payload: IFilter): Array<IUser> {
    let result = items;
    if (payload.selectedGender && payload.selectedGender.length)
        result = result.filter(x => payload.selectedGender.includes(x.gender));
    if (payload.age) {
        switch (payload.ageSelectedMode) {
            case 'greater':
                result = result.filter(x => x.age > payload.age);
                break;
            case 'smaller':
                result = result.filter(x => x.age < payload.age)
                break;
            default:
                result = result.filter(x => x.age === payload.age);
        }
    }
    if (payload.eyeColor && payload.eyeColor.length)
        result = result.filter(x => payload.eyeColor.includes(x.eyeColor));
    if (payload.birthDate && payload.birthDate.length)
        result = result.filter((user: IUser) => {
            return new Date(user.birthDate).getTime() >= payload.birthDate[0].getTime() && new Date(user.birthDate).getTime() <= payload.birthDate[1].getTime();
        });
    return result;
}

export function UsersReducer(
    state: IUserState | undefined,
    action: Action
) {
    return UsersReducerInternal(state, action);
}