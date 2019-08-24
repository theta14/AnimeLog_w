import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl'
})
export class SafeUrl implements PipeTransform {
    constructor(
      private dom: DomSanitizer
    ) { }
  
    transform(value: string, args) {
      return this.dom.bypassSecurityTrustResourceUrl(value);
    }
  
}
