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

}
