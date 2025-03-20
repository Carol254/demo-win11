import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TaskBarComponent } from '../task-bar/task-bar.component';
import { DesktopIconsComponent } from '../desktop-icons/desktop-icons.component';
import { Constants } from '../constants';
import { Shortcut } from '../models';
import { WindowComponent } from '../window/window.component';

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

  icons:any = Constants.iconPaths;
  wallpaper:string = this.icons.desktop.DEFAULT_WALLPAPER;
  initialShortcuts:Array<Shortcut>=[];


  constructor() { }

  ngOnInit(): void {
    this.loadShortcutIcons();
  }

  loadShortcutIcons(){
    this.initialShortcuts = [
      {
        url:this.icons.common.EDGE_BROWSER,
        title:'Microsoft Edge',
      },
      {
        url:this.icons.common.VS_CODE,
        title:'Visual Studio Code',
      },
      {
        url:this.icons.common.FILE_EXPLORER,
        title:'File Explorer',
      },
      {
        url:this.icons.common.CHROME,
        title:'Google Chrome',
      }
    ]
  }

  openContextMenu(){
    console.log('open context menu');
  }

  openWindows: any[] = [];
  zIndexCounter = 100;

  
  openWindow(shortcut: any) {
    const existingWindow = this.openWindows.find(win => win.id === shortcut.id);
    
    if (!existingWindow) {
      this.openWindows.push({ 
        id: shortcut.id, 
        title: shortcut.title, 
        icon: shortcut.url,  
        zIndex: this.zIndexCounter++ 
      });
    } else {
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
