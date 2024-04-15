import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../users/users.service';

declare var AOS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit , OnInit {
  smallScreen: boolean = false;
  showDiv: boolean = false;

  EMAILJS_USER_ID = 'Info@talata-eg.com';


  showVictor: boolean = false;
  showLine: boolean = false;
  showHead: boolean = false;

  activeItem: string | null = 'الرئيسية';
  currentLang: string;
  align: any = '';
  direction: 'ltr' | 'rtl' = 'ltr'; // Default direction is left to right

  shipmentForm: FormGroup = new FormGroup({
    shipmentData: this.fb.group({
      description: ['' , Validators.required],
      optionalWeight: [''],
      optionalDimensions: [''],
      notes: [''],
    }),
    recipientData: this.fb.group({
      fullName: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      optionalEmail: [''],
      deliveryAddress: ['' , Validators.required],
    }),
    senderData: this.fb.group({
      fullName: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      optionalEmail: [''],
      deliveryAddress: ['' , Validators.required],
    }),
  });

  constructor(private translate: TranslateService, private fb: FormBuilder , private userService : UsersService) {
    translate.setDefaultLang('ar');
    this.currentLang = localStorage.getItem('lang') || 'ar';
    translate.use(this.currentLang);
    this.currentLang == 'en'
      ? (this.direction = 'ltr')
      : (this.direction = 'rtl');
  }
  ngOnInit(): void {
    this.userService.scollSubjectObs.subscribe((res : HTMLElement)=>{
      if(res) {

        res.scrollIntoView()

      }
    })

  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  change(text: any) {
    // Get all elements with class 'items'
    let elements = document.querySelectorAll('.items');

    // Loop through all elements
    elements.forEach((element) => {
      // Remove 'itemsActive' class from all elements
      element.classList.remove('itemsActive');

      // If the element's ID matches the provided text, add 'itemsActive' class
      if (element.id === text) {
        element.classList.add('itemsActive');
      }
    });
  }

  scrollToPage(text: any, text2?: any) {
    let element3: any = document.querySelectorAll('.items');

    element3.forEach((item: any) => {
      // Remove 'itemsActive' class from all elements
      item.classList.remove('itemsActive');

      // If the item's ID matches the provided text, add 'itemsActive' class
      // if (
      //   (item.id === text && this.router.url !== '/privacy-policy') ||
      //   (item.id === text && this.router.url !== '/terms-conditions')
      // ) {
      //   item.classList.add('itemsActive');
      // }
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
  }


  onSaveShipment() {
    console.log(this.shipmentForm.value)
    return this.userService.submitForm(this.shipmentForm.value).subscribe(res=>{
      console.log(res)
    })
  }
}
