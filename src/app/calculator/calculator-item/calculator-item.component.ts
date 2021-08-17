import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-calculator-item',
  templateUrl: './calculator-item.component.html',
  styleUrls: ['./calculator-item.component.css']
})
export class CalculatorItemComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Input() attributeValue: number;
  @Input() racialBonus: number;
  @Input() summaryAttributeValue: number;
  @Input() modifier: number;
  @Input() cost: number;
  @Input() addHeader: boolean;
  @Input() headers: string[];

  @Input() resetEvent: Observable<void>;
  @Output() stateChanged = new EventEmitter<any>();
  private resetEventSubscription: Subscription;

  calculatorFormGroup: FormGroup;

  private costs = {
    '8': 0,
    '9': 1,
    '10': 2,
    '11': 3,
    '12': 4,
    '13': 5,
    '14': 7,
    '15': 9
  };

  private attributes = {
    "Siła": "strength",
    "Zręczność": "dexterity",
    "Kondycja": "constitution",
    "Mądrość": "wisdom",
    "Inteligencja": "intelligence",
    "Charyzma": "charisma"
  }

  constructor() {}

  ngOnInit(): void {
    this.calculatorFormGroup = new FormGroup({
      attributeValue: new FormControl(this.attributeValue, [Validators.required])
    });

    this.summaryAttributeValue = this.calculatorFormGroup.value.attributeValue + this.racialBonus;
    this.modifier = -5 + Math.floor(this.summaryAttributeValue / 2);

    this.resetEventSubscription = this.resetEvent.subscribe(() => {
      this.calculatorFormGroup.reset({
        attributeValue: 8
      });
      this.cost = 0;
      this.attributeValue = 8;
      this.summaryAttributeValue = this.calculatorFormGroup.value.attributeValue + this.racialBonus;
      this.modifier = -5 + Math.floor(this.summaryAttributeValue / 2);

      this.stateChanged.emit({
        attribute: this.attributes[this.name],
        cost: this.costs[String(this.attributeValue)]
      });
    });
  }

  ngOnDestroy() {
    this.resetEventSubscription.unsubscribe();
  }

  onAttributeValueChange(): void {
    this.summaryAttributeValue = this.calculatorFormGroup.value.attributeValue + this.racialBonus;
    this.attributeValue = this.calculatorFormGroup.value.attributeValue;
    this.cost = this.costs[String(this.attributeValue)];
    this.modifier = -5 + Math.floor(this.summaryAttributeValue / 2);
    this.stateChanged.emit({
      attribute: this.attributes[this.name],
      cost: this.costs[String(this.attributeValue)]
    });
  }

}
