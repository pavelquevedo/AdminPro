import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  
  constructor() { 
    const theme = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.linkTheme?.setAttribute('href', theme);
  }

  public changeTheme(theme: string){
    
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  public checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentThemeUrl = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentThemeUrl){
        elem.classList.add('working');
      }
    });
  }
}
