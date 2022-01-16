import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})
export class SafeURLPipe implements PipeTransform {
  // https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-without-causing-unsafe-value-exception

  constructor(private sanitizer : DomSanitizer){}
  transform(url: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
