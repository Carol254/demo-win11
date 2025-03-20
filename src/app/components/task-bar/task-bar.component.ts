import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Constants } from '../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-bar',
  imports: [CommonModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.css'
})
export class TaskBarComponent implements OnInit {

  icons:any = Constants.iconPaths;
  constructor() { }

  ngOnInit(): void {
  }


  @Input() windows: any[] = [];
  @Output() restore = new EventEmitter<any>();

  restoreWindow(window: any) {
    window.isMinimized = false;
    this.restore.emit(window);
  }
}

