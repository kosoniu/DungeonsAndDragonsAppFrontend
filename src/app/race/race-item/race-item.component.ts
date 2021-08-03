import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RaceService} from "../race.service";
import {RaceFeature} from "../race-feature.model";

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.css']
})
export class RaceItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() raceFeatures: RaceFeature[];

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {}

  onDelete(id: number) {
    return this.raceService.delete(id).subscribe(response => this.stateChanged.emit());
  }

}
