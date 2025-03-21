import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mail',
  imports: [],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent implements OnInit{

  fileInputs: HTMLInputElement[] = [];

  @ViewChild('filesContainer', { static: false }) filesContainer!: ElementRef;


constructor(){}

ngOnInit(): void {
    
}

attachFiles(){
  const input = document.createElement('input');
  input.type = 'file';
  input.classList.add('file-input'); 


  this.fileInputs.push(input);


  this.filesContainer.nativeElement.appendChild(input);
}





}
