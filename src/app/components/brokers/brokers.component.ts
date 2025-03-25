import { Component, OnInit } from '@angular/core';
import { Broker } from '../broker.model';

@Component({
  selector: 'app-brokers',
  imports: [],
  templateUrl: './brokers.component.html',
  styleUrl: './brokers.component.css'
})
export class BrokersComponent  implements OnInit{

  brokers: Broker[] = [
    { id: 1, name: "Lukas Schneider", firm: "Schneider Finanz AG", region: "Bayern", experience: 8 },
    { id: 2, name: "Hannah Bauer", firm: "Bauer & Partner", region: "Berlin", experience: 5 },
    { id: 3, name: "Felix Meier", firm: "Meier Versicherungsmakler", region: "Hamburg", experience: 12 },
    { id: 4, name: "Sophie Wagner", firm: "Wagner & Co. Versicherungen", region: "München", experience: 7 },
    { id: 5, name: "Jonas Becker", firm: "Becker Versicherungskontor", region: "Frankfurt", experience: 10 },
    { id: 6, name: "Laura Hoffmann", firm: "Hoffmann Finanzberatung", region: "Köln", experience: 6 },
    { id: 7, name: "Maximilian Lehmann", firm: "Lehmann Assekuranz", region: "Düsseldorf", experience: 9 },
    { id: 8, name: "Emily Schuster", firm: "Schuster & Kollegen", region: "Stuttgart", experience: 4 },
    { id: 9, name: "Niklas Weber", firm: "Weber Versicherungslösungen", region: "Leipzig", experience: 11 },
    { id: 10, name: "Mia Fischer", firm: "Fischer Finanzberatung", region: "Dortmund", experience: 3 }
  ];

ngOnInit(): void {
    console.log(this.brokers);
}





}
