import { Injectable } from '@angular/core';
import { User } from '../../interfaces';
import { BehaviorSubject, Observable, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
scollSubject : BehaviorSubject<any> = new BehaviorSubject('')
scollSubjectObs = this.scollSubject.asObservable()

  getCurrentLang() {
    return localStorage.getItem('lang');
  }

  constructor() {}

}
