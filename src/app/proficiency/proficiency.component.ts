import { Component, OnInit } from '@angular/core';
import {ProficiencyService} from "./proficiency.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Proficiency} from "./proficency.model";

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css']
})
export class ProficiencyComponent implements OnInit {

  proficiencyForm: FormGroup;
  proficiencies: Proficiency[] = [];

  constructor(private proficencyService: ProficiencyService, private route: ActivatedRoute) {
    this.proficiencyForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      proficiencyType: new FormControl(null, [Validators.required])
    });

    this.route.data.subscribe(data => this.proficiencies = data.proficiencies);
  }

  ngOnInit(): void {
  }

  onProficiencySubmit() {
    this.proficencyService.add(this.proficiencyForm.value)
      .subscribe(response => {
        this.proficiencyForm.reset();
        this.proficencyService.get()
          .subscribe(proficiencies => this.proficiencies = proficiencies)
      });
  }

}
