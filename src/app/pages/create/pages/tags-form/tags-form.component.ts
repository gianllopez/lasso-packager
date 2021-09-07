import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.scss', '../create.styles.scss']})
export class TagsFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {};

  buildForm(): void {
    this.form = this.fb.group({
      url: ['', [
        Validators.required,
        Validators.pattern(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/)
      ]],
      title: ['', []],
      artist: ['', []],
      album: ['', []]
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

  get patternError(): boolean {
    let { dirty, errors } = this.form.get('url') as FormControl;
    return dirty && errors?.pattern;
  };

};
