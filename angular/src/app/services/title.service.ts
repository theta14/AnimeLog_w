import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private static readonly DefaultTitle = 'AnimeLog W';

  constructor(
    private titleService: Title
  ) { }

  setTitle(title: string) {
    this.titleService.setTitle(TitleService.DefaultTitle + ' :: ' + title);
  }

  setDefaultTitle() {
    this.titleService.setTitle(TitleService.DefaultTitle);
  }

}
