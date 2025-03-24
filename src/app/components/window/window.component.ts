import { NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { BrokersComponent } from "../brokers/brokers.component";
import { CustomersComponent } from '../customers/customers.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { MailComponent } from '../mail/mail.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-window',
  imports: [NgStyle, NgIf,NgSwitch, BrokersComponent,CustomersComponent, ContractsComponent,NgSwitchCase,NgSwitchDefault,MailComponent,SettingsComponent],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {
  @Input() window: any;
  @Output() close = new EventEmitter<void>();
  @Output() bringToFront = new EventEmitter<void>();
  @Output() minimize = new EventEmitter<void>();

  positionX = Math.random() * 200 + 100;
  positionY = Math.random() * 100 + 50;
  width = 300;
  height = 200;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  isMaximized = false;
  isMinimized = false;

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.isDragging = false;
  }

  startDragging(event: MouseEvent) {
    if (this.isMaximized) return;
    this.isDragging = true;
    this.offsetX = event.clientX - this.positionX;
    this.offsetY = event.clientY - this.positionY;

    document.addEventListener('mousemove', this.drag);
  }

  drag = (event: MouseEvent) => {
    if (this.isDragging) {
      this.positionX = event.clientX - this.offsetX;
      this.positionY = event.clientY - this.offsetY;
    }
  };

  stopDragging = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.drag);
  };

  closeWindow() {
    this.close.emit();
  }

  focusWindow() {
    this.bringToFront.emit();
  }

  minimizeWindow() {
    this.minimize.emit(this.window); 
  }

  maximizeWindow() {
    if (this.isMaximized) {
      this.width = 400;
      this.height = 300;
      this.positionX = 100;
      this.positionY = 50;
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight - 40; 
      this.positionX = 0;
      this.positionY = 0;
    }
    this.isMaximized = !this.isMaximized;
  }

  restoreWindow() {
    this.isMinimized = false;
  }

}
