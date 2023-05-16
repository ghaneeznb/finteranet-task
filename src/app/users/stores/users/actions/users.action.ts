import { createAction, props } from "@ngrx/store";
import { IFilter } from "src/app/users/models/filters.model";
import { IUser } from "src/app/users/models/user.model";

export const GetUsersAction = createAction(
  '[Users] GetAll Users'
);

export const GetUsersSuccessAction = createAction(
  '[Users] GetAll Users Success',
  props<{ payload: Array<IUser> }>()
);

export const GetUsersFailureAction = createAction(
  '[Users] GetAll Users Failed',
  props<{ message: any }>()
);

export const FilterUsersAction = createAction(
  '[Users] Filter Users',
  props<{ items: Array<IUser>, payload: IFilter }>()
);