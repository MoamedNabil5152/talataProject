import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _fb : FormBuilder , private _authService : AuthService){}
  loginForm: FormGroup = this._fb.group({
    username: ['' , Validators.required],
    password: ['' , Validators.required],
    isAdmin : false
  });

  ngOnInit() {

  }

  onSubmit() {
    this._authService.login(this.loginForm.value.username , this.loginForm.value.password , this.loginForm.value.isAdmin)
  }
}
