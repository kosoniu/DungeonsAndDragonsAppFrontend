import { Component, OnInit } from '@angular/core';
import {OriginService} from "./origin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Proficiency} from "../proficiency/proficency.model";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {Origin} from "./origin.model";

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {

  proficiencies: Proficiency[] = [];
  origins: Origin[] = [];

  originForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private originService: OriginService, private router: Router, private route: ActivatedRoute) {
    this.originForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      proficiencies: new FormControl(null, [Validators.required])
    });

    this.route.data.subscribe(data => {
      this.proficiencies = data.proficiencies;
      this.origins = data.origins;
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

  onOriginSubmit() {
    this.originForm.value.proficiencies = this.proficiencies.filter(proficiency => this.isProficiencyInArray(proficiency, this.originForm.value.proficiencies))
    this.originService.add(this.originForm.value).subscribe(() => {
      console.log(this.originForm.value)
      this.originForm.reset()
      this.selectedItems = [];
      this.originService.get().subscribe(origins => this.origins = origins);
    });
  }

  onDeleteOrigin() {
    this.originService.get().subscribe(origins => this.origins = origins);
  }

  private isProficiencyInArray(proficiency, proficiencies) {
    return proficiencies.find(p => p.proficiencyId === proficiency.proficiencyId);
  }

}
