import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  constructor() { }

  isDarkMode = true

  swap() {
    this.isDarkMode = !this.isDarkMode
  }
}
