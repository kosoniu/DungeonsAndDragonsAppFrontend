import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Race} from "../../race/race.model";
import {Origin} from "../../origin/origin.model";
import {Class} from "../../class/class.model";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() level: number;
  @Input() race: Race;
  @Input() origin: Origin;
  @Input() clazz: Class;

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    return this.heroService.delete(id).subscribe(response => this.stateChanged.emit());
  }

}
