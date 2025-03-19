import { CommonModule, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TaskBarComponent } from '../task-bar/task-bar.component';
import { DesktopIconsComponent } from '../desktop-icons/desktop-icons.component';
import { Constants } from '../constants';
import { Shortcut } from '../models';

@Component({
  selector: 'app-desktop',
  imports: [NgStyle,TaskBarComponent,DesktopIconsComponent,CommonModule],
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
  wallpaper:string = this.icons.desktop.DEAULT_WALLPAPER;
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

}
