import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProficiencyService} from "../proficiency.service";

@Component({
  selector: 'app-proficiency-item',
  templateUrl: './proficiency-item.component.html',
  styleUrls: ['./proficiency-item.component.css']
})
export class ProficiencyItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() proficiencyType: string;

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor(private proficiencyService: ProficiencyService) { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    return this.proficiencyService.delete(id).subscribe(response => this.stateChanged.emit());
  }

}
