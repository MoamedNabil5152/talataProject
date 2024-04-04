import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
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

}
