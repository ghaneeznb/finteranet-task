import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/users/services/users.service';
import { GetUsersAction, GetUsersFailureAction, GetUsersSuccessAction } from '../actions/users.action';


@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private UsersService: UsersService
  ) {
  }

  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUsersAction),
      switchMap(payload =>
        this.UsersService.getUsers().pipe(
          map(response => GetUsersSuccessAction({ payload: response.users })),
          catchError(error => of(GetUsersFailureAction({ message: error.error.Code })))
        )
      )
    )
  );
}
