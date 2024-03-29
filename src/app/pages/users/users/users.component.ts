import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import {
  Observable,
  catchError,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces';
import { UsersService } from '../users.service';
import { ConfirmationMessageComponent } from 'src/app/shared/shared/confirmation-message/confirmation-message.component';
import { AuthService } from 'src/app/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(
    private _userService: UsersService,
    private _fb: FormBuilder,
    private _dialogService: DialogService,
    private _toaster: ToastrService,
    public authService: AuthService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.getPermissions();
  }

  getPermissions() {
    let permissions: any = localStorage.getItem('permissions');
    this.reAssignedPermissions = JSON.parse(permissions);
  }
  reAssignedPermissions: string[] = [];
  serachForm: FormGroup = this._fb.group({
    name: '',
    email: '',
  });
  checkerFlag: boolean = false;
  errorMessage: string = '';
  usersList$: any = this.getusersData();
  onAddEditUsers(user?: User, text?: any) {
    let data = { user, text };
    const dialogref = this._dialogService.open(UsersComponent, {
      header:
        user && !text
          ? this.translate.instant('editUser')
          : text
          ? this.translate.instant('viewUser')
          : this.translate.instant('AddNewUser'),
      width: '60%',
      height: user ? '500px' : '450px',
      data: data,
    });
    dialogref.onClose.subscribe((res) => {
      if (res) {
        if (user) {
          this._toaster.success(`User ${res.name} Edited Successfully`);
        } else {
          this._toaster.success(`User ${res.name} Added Successfully`);
          this.usersList$ = this.getusersData();
        }
      }
    });
  }

  getusersData() {
    return this._userService.getEmployessInfo().pipe(
      catchError((error) => {
        this.errorMessage =
          'Error loading Users List data. Please try again later.';
        return throwError(error);
      })
    );
  }

  onViewAsUser() {
    this.checkerFlag = !this.checkerFlag;

    if (this.checkerFlag) {
      this.authService.reAssignedPermissions = this.authService.userPermissions;
      localStorage.setItem(
        'permissions',
        JSON.stringify(this.authService.userPermissions)
      );
      this.getPermissions();
    } else {
      this.authService.reAssignedPermissions =
        this.authService.adminPermissions;
      localStorage.setItem(
        'permissions',
        JSON.stringify(this.authService.adminPermissions)
      );
      this.getPermissions();
    }
  }

  onFilter(): void {
    const nameFilter = this.serachForm.get('name')?.value.toLowerCase();
    const emailFilter = this.serachForm.get('email')?.value.toLowerCase();
    this.usersList$ = this._userService.getEmployessInfo().pipe(
      map((users: User[]) => {
        return users.filter(
          (user: any) =>
            (user.name.toLowerCase().includes(nameFilter) ||
              nameFilter === '') &&
            (user.email.toLowerCase().includes(emailFilter) ||
              emailFilter === '')
        );
      })
    );
  }

  onDeleteUser(user: any) {
    const dialogref = this._dialogService.open(ConfirmationMessageComponent, {
      header: `${user.name}`,
      width: '35%',
      height: '220px',
      data: {
        MSG: this.translate.instant('delete'),
      },
    });
    dialogref.onClose.subscribe((res) => {
      if (res) {
        this._userService.usersList = this._userService.usersList.filter(
          (elem: any) => elem.id !== user.id
        );

        this.usersList$ = this.getusersData();

        this._toaster.success(`User ${user.name} deleted Successfully`);
      }
    });
  }
}
