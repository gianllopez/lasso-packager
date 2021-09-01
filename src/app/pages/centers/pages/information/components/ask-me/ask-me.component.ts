import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetcherService } from 'src/app/services/fetcher/fetcher.service';

@Component({
  selector: 'ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'] })
export class AskMeComponent implements OnInit {

  @Input() show = false;
  @Output() onCancel = new EventEmitter();
  
  form!: FormGroup;
  loading = false;
  sent = false;
  error = false;

  constructor(private fb: FormBuilder, private fetcher: FetcherService) {};

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

  onSubmit(): void {
    if (this.form.valid) {
      this.loading = true;
      this.fetcher.askQuestion(this.form.value)
        .then(res => {
          this.loading = false;
          if (res.sent) {
            this.sent = true;
            this.form.reset();
          } else this.error = true;
        });
    };
  };

};
