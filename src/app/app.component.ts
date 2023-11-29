import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentLang: string;
  direction: 'ltr' | 'rtl' = 'ltr'; // Default direction is left to right
  items: any = [];

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    translate.use(this.currentLang);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.initItems();
    }, 400);
  }

  initItems() {
    this.items = [
      {
        label: this.translate.instant('logout'),
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
      {
        label: this.translate.instant('language'),
        icon: 'pi pi-globe',
        command: () => this.switchLanguage(),
      },
    ];
  }

  logout() {
    this.authService.logout();
  }

  switchLanguage(): void {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);

    // Set the direction based on the new language
    this.direction = newLang === 'ar' ? 'rtl' : 'ltr';

    this.currentLang = newLang;

    // Save the selected language in localStorage
    localStorage.setItem('lang', newLang);

    // Reload the page
    location.reload();
  }
}
