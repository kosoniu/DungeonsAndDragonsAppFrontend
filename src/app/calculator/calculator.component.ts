import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  totalCost: number = 0;
  resetEventSubject: Subject<void> = new Subject<void>();

  private costs = {
    "strength": 0,
    "dexterity": 0,
    "constitution": 0,
    "intelligence": 0,
    "wisdom": 0,
    "charisma": 0
  };

  headers: string[] = [
    "Cecha",
    "Ilość punktów cechy",
    "",
    "Bonus rasowy",
    "",
    "Sumaryczna ilość punktów cechy",
    "Modyfikator",
    "Wydane punkty"
  ];

  races = [
    {
      name: "Elf",
      archetypes: [
        "Elf Wysoki",
        "Elf Leśny"
      ]
    },
    {
      name: "Człowiek",
      archetypes: [
        "Człowiek",
        "Wariant człowieka"
      ]
    },
    {
      name: "Krasnolud",
      archetypes: [
        "Krasnolud Tarczowy",
        "Krasnolud Wzgórzowy"
      ]
    }
  ];

  attributes: string[] = [
    "Siła",
    "Zręczność",
    "Kondycja",
    "Mądrość",
    "Inteligencja",
    "Charyzma"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAttributeChange(event) {
    this.costs[event.attribute] = event.cost;
    this.totalCost = Object.values(this.costs).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  emitResetEvent() {
    this.resetEventSubject.next();
  }

}
