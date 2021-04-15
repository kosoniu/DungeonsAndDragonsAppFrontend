import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProficiencyService} from "../proficiency/proficiency.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  originForm: FormGroup;
  proficiencyForm: FormGroup;

  constructor(private proficencyService: ProficiencyService, private formBuilder: FormBuilder) {
    this.proficiencyForm = formBuilder.group({
      name: [],
      proficiencyType: []
    });

  }

  ngOnInit(): void {
  }

  onOriginSubmit() {

  }

  onProficiencySubmit() {
    this.proficencyService.add(this.proficiencyForm.value).subscribe(response => console.log(response));
  }

}
