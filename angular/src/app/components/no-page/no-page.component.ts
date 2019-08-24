import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent {

  constructor(
    private titleService: TitleService
  ) {
    this.titleService.setTitle('Page Not Found');
  }

}
