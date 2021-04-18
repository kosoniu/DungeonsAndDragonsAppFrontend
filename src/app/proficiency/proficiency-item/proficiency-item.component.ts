import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-proficiency-item',
  templateUrl: './proficiency-item.component.html',
  styleUrls: ['./proficiency-item.component.css']
})
export class ProficiencyItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() proficiencyType: string;

  constructor() { }

  ngOnInit(): void {
  }

}
