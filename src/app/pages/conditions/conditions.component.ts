import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent {
  currentLang : any
  constructor(){
    this.currentLang = localStorage.getItem('lang') || 'ar';

  }

}
