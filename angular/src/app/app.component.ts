import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { path: '/tva', label: 'TVA' },
    { path: '/movie', label: '극장판' },
    { path: '/watching', label: '시청 중인 목록' },
    { path: '/plan', label: '시청 예정 목록' }
  ];

  constructor(
    private router: Router
  ) { }

  scrollUp() {
    window.scroll(0, 0);
  }

  scrollDown() {
    let footer = document.getElementById('footer');
    footer.scrollIntoView();
  }

}
