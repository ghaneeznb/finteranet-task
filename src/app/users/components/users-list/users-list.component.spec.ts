import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListComponent } from './users-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IAppState } from 'src/app/store/states/app.state';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAllUserSelector, GetUsersAction } from '../../stores/users';
import { TestHelper } from '../../test-helper/test-helper';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let store: MockStore<IAppState>;
  const initialState = {
    users: {
      items: [
        { "id": 1, "firstName": "Terry", "lastName": "Medhurst", "maidenName": "Smitham", "age": 50, "gender": "male", "email": "atuny0@sohu.com", "phone": "+63 791 675 8914", "username": "atuny0", "password": "9uQFF1Lh", "birthDate": "2000-12-25", "image": "https://robohash.org/hicveldicta.png", "bloodGroup": "A−", "height": 189, "weight": 75.4, "eyeColor": "Green", "hair": { "color": "Black", "type": "Strands" }, "domain": "slashdot.org", "ip": "117.29.86.254", "address": { "address": "1745 T Street Southeast", "city": "Washington", "coordinates": { "lat": 38.867033, "lng": -76.979235 }, "postalCode": "20020", "state": "DC" }, "macAddress": "13:69:BA:56:A3:74", "university": "Capitol University", "bank": { "cardExpire": "06/22", "cardNumber": "50380955204220685", "cardType": "maestro", "currency": "Peso", "iban": "NO17 0695 2754 967" }, "company": { "address": { "address": "629 Debbie Drive", "city": "Nashville", "coordinates": { "lat": 36.208114, "lng": -86.58621199999999 }, "postalCode": "37076", "state": "TN" }, "department": "Marketing", "name": "Blanda-O'Keefe", "title": "Help Desk Operator" }, "ein": "20-9487066", "ssn": "661-64-2976", "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24" },
        { "id": 2, "firstName": "Sheldon", "lastName": "Quigley", "maidenName": "Cole", "age": 28, "gender": "male", "email": "hbingley1@plala.or.jp", "phone": "+7 813 117 7139", "username": "hbingley1", "password": "CQutx25i8r", "birthDate": "2003-08-02", "image": "https://robohash.org/doloremquesintcorrupti.png", "bloodGroup": "O+", "height": 187, "weight": 74, "eyeColor": "Brown", "hair": { "color": "Blond", "type": "Curly" }, "domain": "51.la", "ip": "253.240.20.181", "address": { "address": "6007 Applegate Lane", "city": "Louisville", "coordinates": { "lat": 38.1343013, "lng": -85.6498512 }, "postalCode": "40219", "state": "KY" }, "macAddress": "13:F1:00:DA:A4:12", "university": "Stavropol State Technical University", "bank": { "cardExpire": "10/23", "cardNumber": "5355920631952404", "cardType": "mastercard", "currency": "Ruble", "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML" }, "company": { "address": { "address": "8821 West Myrtle Avenue", "city": "Glendale", "coordinates": { "lat": 33.5404296, "lng": -112.2488391 }, "postalCode": "85305", "state": "AZ" }, "department": "Services", "name": "Aufderhar-Cronin", "title": "Senior Cost Accountant" }, "ein": "52-5262907", "ssn": "447-08-9217", "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30" }
      ],
      error: '',
      success: '',
    }
  };
  const usersTable = 'dtUser';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [
        TableModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        MultiSelectModule,
        CheckboxModule,
        KeyFilterModule,
        CalendarModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    });

  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => { });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when component initialize', () => {
    let mockGetAllUsers: any;


    beforeEach(() => {
      mockGetAllUsers = store.overrideSelector(GetAllUserSelector, initialState.users.items);

      component.ngOnInit();
    });

    it('FirstName should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 0)).toBe('Terry');
    });

    it('LastName should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 1)).toBe('Medhurst');
    });

    it('Age should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 2)).toBe('50');
    });

    it('Gender should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 3)).toBe('male');
    });

    it('Email should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 4)).toBe('atuny0@sohu.com');
    });

    it('Phone should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 5)).toBe('+63 791 675 8914');
    });

    it('EyeColor should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 6)).toBe('Green');
    });

    it('BirthDate should be have value', () => {
      mockGetAllUsers.setResult(initialState.users.items);
      store.refreshState();
      fixture.detectChanges();
      expect(TestHelper.primeTable.getTextAtCell(fixture, usersTable, 7)).toBe('2000-12-25');
    });    
  
    it('should be users bind to data source', () => {
      expect(component.users).toEqual(initialState.users.items);
    });

    it('should dispatch getAll action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(
        GetUsersAction()
      );
    });
  });
});
