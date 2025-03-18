import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { Shortcut } from '../models';

@Component({
  selector: 'app-desktop-icons',
  imports: [NgFor,CommonModule],
  templateUrl: './desktop-icons.component.html',
  styleUrl: './desktop-icons.component.css'
})
export class DesktopIconsComponent  implements OnInit {

  icons:any = Constants.iconPaths;

  @Input() shortcuts:Array<Shortcut> = [
    {
      url:this.icons.common.EDGE_BROWSER,
      title:'Edge'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
