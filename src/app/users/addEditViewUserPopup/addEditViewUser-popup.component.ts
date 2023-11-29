import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, of, switchMap } from 'rxjs';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/interfaces';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-addEditViewUser-popup',
  templateUrl: './addEditViewUser-popup.component.html',
  styleUrls: ['./addEditViewUser-popup.component.scss'],
})
export class AddEditViewUserPopupComponent implements OnInit {
  constructor(
    private _usersService: UsersService,
    private _fb: FormBuilder,
    public _config: DynamicDialogConfig,
    private Ref: DynamicDialogRef
  ) {}
  DepartmentList$ = of([]);
  data: User = {};
  userIndex: any;
  ngOnInit(): void {
    this.setFormValues(this._config?.data?.user);

    if (this._config?.data?.text) {
      this.addUserForm.disable();
    }
  }
  setFormValues(data: any) {
    if (data) {
      this.addUserForm.patchValue(data);
    }
  }
  addUserForm: FormGroup = this._fb.group({
    name: ['', Validators.required],
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    address: this._fb.group({
      street: [''],
    }),
    phone: ['', Validators.required],
    website: ['', Validators.required],
    company: this._fb.group({
      name: [''],
    }),
  });

  onChangeDepartment() {
    this.Ref.close({ ...this.data, ...this.addUserForm.value });
  }

  onSubmit() {
    if (this._config?.data?.id) {
      this.onEditUser();
    } else {
      this.onAddUser();
    }
  }

  onAddUser() {
    let newUser = { ...this.addUserForm.value };
    newUser.id = this._usersService.usersList.length + 1;
    newUser.address.suite = '';
    newUser.address.city = '';
    newUser.address.zipcode = '';
    newUser.address.geo = {};
    newUser.address.geo.lat = '';
    newUser.address.geo.lang = '';
    newUser.company.catchPhrase = '';
    newUser.company.bs = '';
    // push to arr in Service
    this._usersService.usersList.push(newUser);
    this.Ref.close(newUser);
  }
  onEditUser() {
    let newUser = { ...this.addUserForm.value };
    newUser.id = this._config.data.id;
    newUser.address.suite = '';
    newUser.address.city = '';
    newUser.address.zipcode = '';
    newUser.address.geo = {};
    newUser.address.geo.lat = '';
    newUser.address.geo.lang = '';
    newUser.company.catchPhrase = '';
    newUser.company.bs = '';
    // edit arr in Service
    this.userIndex = this._usersService.usersList.findIndex(
      (elem: any) => elem.id == this._config.data.id
    );

    this._usersService.usersList[this.userIndex] = newUser;
    this.Ref.close(newUser);
  }
}
