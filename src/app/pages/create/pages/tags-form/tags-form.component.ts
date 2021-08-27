import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.scss', '../create.styles.scss']})
export class TagsFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {};

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
    let { data } = window.history.state;
    if (data) { this.form.setValue(data) };
  };

  onSubmit(): void {
    let data = this.form.value;
    this.router.navigate(['create/cover'], { state: { data } });
  };

};
