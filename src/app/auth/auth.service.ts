import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router : Router){}
  adminPermissions : string[] = ['viewUser' , 'editUser' , 'deleteUser' , 'viewAsAuser' , 'AddNewUser']
  userPermissions : string[] = ['viewUser' , 'editUser']
  reAssignedPermissions : string[]  = []
  public isLoggedIn : boolean = false;
   currentUserRole: boolean = false;

  login(username: string, password: string , isAdmin : boolean): boolean {
    this.currentUserRole = isAdmin;
    if(this.currentUserRole) {
      localStorage.setItem('role' , 'isAdmin') ;
      this.reAssignedPermissions = this.adminPermissions
    } else {
      localStorage.setItem('role' , 'isUser')
      this.reAssignedPermissions = this.userPermissions

    }
    if(username && password) {
      this.isLoggedIn = true;
      this._router.navigate(['/users']);
      let credentialFlag = JSON.stringify(this.currentUserRole)
      localStorage.setItem('isLoggedIn' , credentialFlag)
      // permissions come from backend so the right way to not set them in localStorage but in this case i should listen to them
      localStorage.setItem('permissions' , JSON.stringify(this.reAssignedPermissions))
    }


    return this.isLoggedIn;
  }

  logout(): void {
    localStorage.clear()
    this.isLoggedIn = false;
    this.currentUserRole = false;
    this._router.navigate(['/'])
  }

  public getTokenFlag(): string | null {
    let token : any = localStorage.getItem('isLoggedIn')
    return JSON.parse(token)
  }
  public getUser(): string | null {
    let user : any = localStorage.getItem('role')
    return user
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUserRole(): boolean {
    return this.currentUserRole;
  }
}
