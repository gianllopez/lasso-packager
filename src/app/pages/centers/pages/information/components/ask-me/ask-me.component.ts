import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'] })
export class AskMeComponent implements OnInit {

  @Input() show = false;
  @Output() onCancel = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {};

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      question: ['', [ Validators.required ]]
    });
  };

  ngOnInit() {
    this.buildForm();
  };

  cancelHandler(): void {
    this.onCancel.emit();
  };


};
