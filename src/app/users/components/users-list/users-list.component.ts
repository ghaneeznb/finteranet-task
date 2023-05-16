import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IAppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { FilterUsersAction, GetAllUserSelector, GetFilterUserSelector, GetUsersAction } from '../../stores/users';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  resourceUsers!: Array<IUser>;
  users!: Array<IUser>;
  getAllUserSelector$!: Subscription;
  searchValue: string = '';
  genders: any[] = ['male', 'female', 'others', 'I prefer not to say'];
  matchMode: any = ['equal', 'greater', 'smaller'];
  eyeColor!: any[];
  birthDate!: Date[];
  filtersVisible: boolean = false;
  filterFormGroup!: FormGroup;
  collapsed: boolean = true;

  constructor(
    private _store: Store<IAppState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.usersSelector();
    this.filtersUsersSelector();
    this.dispatchUsers();
    this.createFormFilter();
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
        this.resourceUsers = res;
        this.setEyeColor(res);
      }
    });
  }

  private filtersUsersSelector() {
    this.getAllUserSelector$ = this._store.pipe(select(GetFilterUserSelector)).subscribe(res => {
      if (res) {
        this.users = res;
      }
    });
  }

  private createFormFilter() {
    this.filterFormGroup = this.fb.group({
      selectedGender: [],
      ageSelectedMode: 'equal',
      age: 0,
      eyeColor: [],
      birthDate: null
    });
  }

  private setEyeColor(users: Array<IUser>) {
    const arrayEyeColor = users.map(x => x.eyeColor);
    this.eyeColor = arrayEyeColor.filter((item, index) => arrayEyeColor.indexOf(item) === index);
  }

  clearDtUser(table: Table) {
    this.filterFormGroup.reset();
    this.dispatchUsers();
    table.clear();
  }

  filterDtUser() {
    this._store.dispatch(FilterUsersAction({ items: this.resourceUsers, payload: this.filterFormGroup.value }));
  }
}
