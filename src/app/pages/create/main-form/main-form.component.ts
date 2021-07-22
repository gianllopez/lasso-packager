import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss', '../create.styles.scss'],
  host: { class: 'center-form' }})
export class MainFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {};

  buildForm(): void {
    this.form = this.fb.group({
      url: ['', [ Validators.required ]],
      title: ['', [ Validators.required ]],
      artist: ['', [ Validators.required ]],
      album: ['', [ Validators.required ]]
    });
  };

  ngOnInit(): void {
    this.buildForm();
  };

  onSubmit(): void {
    console.log(this.form.value);    
  };

};
