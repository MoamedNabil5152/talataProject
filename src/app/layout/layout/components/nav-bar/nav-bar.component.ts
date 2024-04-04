import { trigger, state, style, transition, animate } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/pages/users/users.service';
declare var AOS: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})
export class NavBarComponent implements AfterViewInit {

  smallScreen : boolean =false ;
  showDiv: boolean = false;

  showVictor : boolean = false
  showLine : boolean = false
  showHead : boolean = false

  activeItem: string | null = 'الرئيسية';
  currentLang: string;
  align : any = ''
  direction: 'ltr' | 'rtl' = 'ltr'; // Default direction is left to right


  shipmentForm : FormGroup = new FormGroup({
    shipmentData: this.fb.group({
      description: [''],
      optionalWeight: [''],
      optionalDimensions: [''],
      notes: ['']
    }),
    recipientData: this.fb.group({
      fullName: [''],
      mobileNumber: [''],
      optionalEmail: [''],
      deliveryAddress: ['']
    }),
    senderData: this.fb.group({
      fullName: [''],
      mobileNumber: [''],
      optionalEmail: [''],
      deliveryAddress: ['']
    })
  })

  constructor(private translate: TranslateService , private fb : FormBuilder , private userService : UsersService  ) {
    translate.setDefaultLang('ar');
    this.currentLang = localStorage.getItem('lang') || 'ar';
    translate.use(this.currentLang);
    this.currentLang == 'en' ? this.direction = 'ltr' : this.direction = 'rtl';
  }

   toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  scrollToPage(text : any ,text2? : any) {


  let element3: any = document.querySelectorAll('.items');

  element3.forEach((item: any) => {
    // Remove 'itemsActive' class from all elements
    item.classList.remove('itemsActive');

    // If the item's ID matches the provided text, add 'itemsActive' class
    if (item.id === text) {
      item.classList.add('itemsActive');
    }
  });


  setTimeout(() => {
    let element: any = document.getElementById(text);
    let element2: any = document.getElementById(text2);
    this.userService.scollSubject.next(element);
    element2.classList.add('itemsActive');
  }, 100);


    // setTimeout(() => {
    //   let element : any = document.getElementById(text)
    //   let element2: any = document.getElementById(text2)

    //   this.userService.scollSubject.next(element)
    //   element2.classList.add('itemsActive')
    //   setTimeout
    // }, 100);
  }


  // let element: any = document.getElementById(text);
  // let element2: any = document.getElementById(text2);
  // let element3: any = document.querySelectorAll('.items');

  // // element3.forEach((item: any) => {
  // //   // Remove 'itemsActive' class from all elements
  // //   item.classList.remove('itemsActive');

  // //   // If the item's ID matches the provided text, add 'itemsActive' class
  // //   if (item.id === text) {
  // //     item.classList.add('itemsActive');
  // //   }
  // // });


  // setTimeout(() => {
  //   this.userService.scollSubject.next(element);
  //   // element2.classList.add('itemsActive');
  // }, 1000);



  change(text: any) {


  }
  ngAfterViewInit(): void {
    AOS.init();

    this.detectScreenSize();
    window.addEventListener('resize', this.detectScreenSize);
  }

  detectScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }

  setActive(item: string) {
    const isActive = this.activeItem === item;
    const selectedItem = document.querySelector(`.items.${item}`);
    if (
      selectedItem &&
      (!isActive || !selectedItem.classList.contains('itemsActive'))
    ) {
      this.activeItem = isActive ? this.activeItem : item;
    }
  }

  switchLanguage(): void {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);

    // Set the direction based on the new language
    this.direction = newLang === 'ar' ? 'rtl' : 'ltr';

    this.currentLang = newLang;

    // Save the selected language in localStorage
    localStorage.setItem('lang', newLang);
    setTimeout(() => {
      location.reload()
    }, 500);
  }

  onSaveShipment() {
    console.log(this.shipmentForm.value)
  }
}
