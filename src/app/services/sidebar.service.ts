import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItems: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Graphics', url: 'chart' }
      ]
    }
  ]

  constructor() { }
}
