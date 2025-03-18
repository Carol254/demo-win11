import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Constants } from '../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-bar',
  imports: [CommonModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.css'
})
export class TaskBarComponent implements OnInit {

  @ViewChild('taskBar') taskBar!: ElementRef;
  taskBarHeight: number = 44; 

  icons:any = Constants.iconPaths;
  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   if (this.taskBar) {
  //     this.taskBar.nativeElement.style.height = `${this.taskBarHeight}px`;
  //   }
  // }
}

