import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProficiencyService} from "../proficiency/proficiency.service";
import {OriginService} from "../origin/origin.service";
import {Origin} from "../origin/origin.model";
import {Proficiency} from "../proficiency/proficency.model";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {map} from "rxjs/operators";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  originForm: FormGroup;
  proficiencyForm: FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  private origin: Origin;
  private proficiency: Proficiency;
  private proficiences: Proficiency[] = [];

  constructor(private proficencyService: ProficiencyService, private originService: OriginService, private router: Router, private route: ActivatedRoute) {
    this.proficiencyForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      proficiencyType: new FormControl(null, [Validators.required])
    });

    this.originForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      proficiencies: new FormControl(null, [Validators.required])
    });

    this.route.data.subscribe(data => data.proficiences.forEach((proficiency, index) => this.dropdownList.push({
      id: proficiency.proficiencyId.value, name: proficiency.name
    })));

  }

   ngOnInit(): void {
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Wybierz wszystkie',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: false
      };
  }

  onOriginSubmit() {
    console.log(this.originForm.value);
  }

  onProficiencySubmit() {
    this.proficencyService.add(this.proficiencyForm.value).subscribe(response => console.log(response));
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
