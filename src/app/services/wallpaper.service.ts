import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {

  private storageKey = 'desktopWallpaper';
  private wallpaperSource = new BehaviorSubject<string>((this.getStoredWallpaper()));
  currentWallpaper = this.wallpaperSource.asObservable();

  constructor() { }

  private getStoredWallpaper():string{
    return localStorage.getItem(this.storageKey) || '/images/desktop/win-11-1.webp';
  }

  setWallpaper(url: string) {
    localStorage.setItem(this.storageKey, url); 
    this.wallpaperSource.next(url); 
  }
}
