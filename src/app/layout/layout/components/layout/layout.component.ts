import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  constructor(private router : Router){}
  smallScreen : boolean = false
  ngAfterViewInit(): void {
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

  onNavigate(){
    this.router.navigate(['/terms-conditions']);

   window.scrollTo(0,0)

  }
  onPolicy(){

    this.router.navigate(['/privacy-policy']);

   window.scrollTo(0,0)


  }

}
