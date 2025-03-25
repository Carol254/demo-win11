import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TaskBarComponent } from '../task-bar/task-bar.component';
import { DesktopIconsComponent } from '../desktop-icons/desktop-icons.component';
import { Constants } from '../constants';
import { Shortcut } from '../models';
import { WindowComponent } from '../window/window.component';
import { WallpaperService } from '../../services/wallpaper.service';

@Component({
  selector: 'app-desktop',
  imports: [NgStyle,TaskBarComponent,DesktopIconsComponent,CommonModule,WindowComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {

  @HostListener('contextmenu', ['$event'])
  onContextMenu(e:any){
    e.preventDefault();
    console.log('on right click event = ', e);
  }

  wallpaper: string = '';

  icons:any = Constants.iconPaths;
  initialShortcuts:Array<Shortcut>=[];


  constructor(private wallpaperService: WallpaperService ) { }

  ngOnInit(): void {
    this.loadShortcutIcons();
    this.wallpaperService.currentWallpaper.subscribe((url) => {
      this.wallpaper = url;
    });
  }

  loadShortcutIcons() {
    this.initialShortcuts = [
      {
        id: 'brokers', 
        url: this.icons.common.BROKERS,
        title: 'Brokers',
      },
      {
        id: 'customers', 
        url: this.icons.common.CUSTOMERS,
        title: 'Customers',
      },
      {
        id: 'contracts', 
        url: this.icons.common.CONTRACTS,
        title: 'Contracts',
      },{
        id: 'contacts',
        url: this.icons.common.CONTACTS,
        title: 'Contacts',
      },
      {
        id: 'mail',
        url: this.icons.common.MAIL,
        title: 'Mail',
      },
      {
        id: 'settings',
        url: this.icons.common.SETTINGS,
        title: 'Settings',
      },
      {
        id: 'tickets',
        url: this.icons.common.TICKETS,
        title: 'Tickets'
      },
      {
        id: 'chrome',
        url: this.icons.common.CHROME,
        title: 'Google Chrome',
      }
    ];
  }

  openContextMenu(){
    console.log('open context menu');
  }

  openWindows: any[] = [];
  zIndexCounter = 100;

  
  openWindow(shortcut: any) {
     // Check if a window with the given shortcut ID is already open
    const existingWindow = this.openWindows.find(win => win.id === shortcut.id);

    if (!existingWindow) {
       // If the window does not exist, create and add a new window object
      this.openWindows.push({
        id: shortcut.id,
        title: shortcut.title,
        icon: shortcut.url,
        zIndex: this.zIndexCounter++,
        isMinimized: false
      });
    } else {
      // If the window already exists, bring it to the front
      existingWindow.zIndex = this.zIndexCounter++;
      existingWindow.isMinimized = false;
    }
  }
  

  closeWindow(window: any) {
    this.openWindows = this.openWindows.filter(w => w.id !== window.id);
  }

  bringToFront(window: any) {
    window.zIndex = this.zIndexCounter++;
  }

  restoreWindow(window: any) {
    window.isMinimized = false;
    window.zIndex = this.zIndexCounter++; 
  }

  minimizeWindow(window: any) {
    const index = this.openWindows.findIndex(w => w.id === window.id);
    if (index !== -1) {
      this.openWindows[index].isMinimized = true;
    }
  }
  
  getMinimizedWindows() {
    return this.openWindows.filter(w => w.isMinimized);
  }
  

}
