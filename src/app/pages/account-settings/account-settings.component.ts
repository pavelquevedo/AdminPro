import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {  

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  public changeTheme(theme: string){
    
    this.settingsService.changeTheme(theme);
    // const url = `./assets/css/colors/${theme}.css`;

    // this.linkTheme?.setAttribute('href', url);
    // localStorage.setItem('theme', url);

    // this.checkCurrentTheme();
    //console.log(theme);
  }

  

}
