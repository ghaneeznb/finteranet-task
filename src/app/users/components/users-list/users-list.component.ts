import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IAppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { GetAllUserSelector, GetUsersAction } from '../../stores/users';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users!: Array<IUser>;
  getAllUserSelector$!: Subscription;
  searchValue: string = '';
  gender: any[] = ['male', 'female', 'others', 'I prefer not to say'];
  selectedGenders: any[] = [];
  eyeColor: any[] = [];
  birthDate!: Date[];

  constructor(
    private _store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.usersSelector();
    this.dispatchUsers();
  }

  ngOnDestroy(): void {
    this.getAllUserSelector$.unsubscribe();
  }

  private dispatchUsers() {
    this._store.dispatch(GetUsersAction());
  }


  private usersSelector() {
    this.getAllUserSelector$ = this._store.pipe(select(GetAllUserSelector)).subscribe(res => {
      if (res) {
        this.users = res;
        this.setEyeColor(res);
      }
    });
  }

  private setEyeColor(users: Array<IUser>) {
    const arrayEyeColor = users.map(x => x.eyeColor);
    this.eyeColor = arrayEyeColor.filter((item, index) => arrayEyeColor.indexOf(item) === index);
  }

  clearDtUser(table: Table) {
    table.clear();
  }
}
