import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeManagerService } from './core/services/theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private theme: ThemeManagerService){
    this.darkMode = theme.isDarkMode
  }

  // ---------------------------- STATE ----------------------------
  darkMode: boolean

  // ---------------------------- FUNCTIONALITY ----------------------------

  onProfessionalToggleBtnClick() {
    this.router.navigate(['professional'])
  }

  onPersonalToggleBtnClick() {
    this.router.navigate(['personal'])
  }

  get containerStyles(): {} {
    return {
      backgroundColor: this.darkMode ? "rgb(20, 20, 20)" : "rgb(247, 243, 236)",
      color: this.darkMode ? "#fff" : "#000"
    }
  }
}
