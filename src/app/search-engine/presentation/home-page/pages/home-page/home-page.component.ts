import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {
  showSearchBox: boolean = false;
  showinformationNavigationBar:boolean = true

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateSearchBoxVisibility();
    });
  }

  private updateSearchBoxVisibility(): void {
    const url = this.router.url;
    this.showSearchBox = !url.endsWith('analitica') && !url.endsWith('list');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSearchBoxVisibility();
      }
    });
  }


}
