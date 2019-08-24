import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtml implements PipeTransform {
  constructor(
    private dom: DomSanitizer
  ) { }

  transform(value: string, args) {
    return this.dom.bypassSecurityTrustHtml(value);
  }

}
