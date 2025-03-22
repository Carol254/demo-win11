import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { WallpaperService } from '../../services/wallpaper.service';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent  implements OnInit{

  icons:any = Constants.iconPaths;

  backgroundImages:any[] = [
    {
      id: 0,
      url:this.icons.desktop.DEFAULT_WALLPAPER,
      imgName:'defaultWallpaper' 
    },
    {
      id: 1,
      url:this.icons.desktop.WALLPAPER_1,
      imgName:'wallpaper1' 
    },
    {
      id: 2,
      url:this.icons.desktop.WALLPAPER_2,
      imgName:'wallpaper2' 
    },
    {
      id: 3,
      url:this.icons.desktop.WALLPAPER_3,
      imgName:'wallpaper3' 
    },
    {
      id: 4,
      url:this.icons.desktop.WALLPAPER_4,
      imgName:'wallaper4' 
    },
    {
      id: 5,
      url:this.icons.desktop.WALLPAPER_5,
      imgName:'wallpaper5' 
    },
  ];

  constructor(private wallpaperService: WallpaperService){}

  ngOnInit(): void {
      
  }

  changeWallpaper(item:any){
    console.log(`Setting wallpaper to: ${item.imgName}`);
    this.wallpaperService.setWallpaper(item.url);

  }
}
