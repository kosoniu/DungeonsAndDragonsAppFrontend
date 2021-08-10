import { Component, OnInit } from '@angular/core';
import {Proficiency} from "../proficiency/proficency.model";
import {Class} from "./class.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {ClassService} from "./class.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  proficiencies: Proficiency[] = [];
  classes: Class[];

  classForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private classService: ClassService, private router: Router, private route: ActivatedRoute) {
    this.classForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      hitDice: new FormControl(null, [Validators.required]),
      healthPoints: new FormControl(null, [Validators.required]),
      healthPointsOnHigherLevels: new FormControl(null, [Validators.required]),
      proficiencies: new FormControl(null, [Validators.required])
    });

    this.route.data.subscribe(data => {
      this.proficiencies = data.proficiencies;
      this.classes = data.classes;
      data.proficiencies.forEach(proficiency => this.dropdownList.push(proficiency))
    });
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'proficiencyId',
      textField: 'name',
      selectAllText: 'Wybierz wszystkie',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  onSubmit() {
    this.classForm.value.proficiencies = this.proficiencies.filter(proficiency => this.isProficiencyInArray(
      proficiency,
      this.classForm.value.proficiencies)
    );

    this.classService.add(this.classForm.value).subscribe(() => {
      this.classForm.reset()
      this.selectedItems = [];
      this.classService.get().subscribe(origins => this.classes = origins);
    });
  }

  onDelete() {
    this.classService.get().subscribe(classes => this.classes = classes);
  }

  private isProficiencyInArray(proficiency, proficiencies) {
    return proficiencies.find(p => p.proficiencyId === proficiency.proficiencyId);
  }

}
