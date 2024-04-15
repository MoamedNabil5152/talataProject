import { Injectable } from '@angular/core';
import { User } from '../../interfaces';
import { BehaviorSubject, Observable, map, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
scollSubject : BehaviorSubject<any> = new BehaviorSubject('')
scollSubjectObs = this.scollSubject.asObservable()

  getCurrentLang() {
    return localStorage.getItem('lang');
  }

  submitForm(formData : any) : Observable<any> {
   return this.http.post('http://localhost:3000/sendEmail', formData)

  }

  constructor(private http : HttpClient) {}

}
