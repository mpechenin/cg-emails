import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cg-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnChanges {
  @Input() to: string;
  @Output() sendEmail = new EventEmitter();
  @Output() closeCompose = new EventEmitter();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      to: [null, Validators.required],
      subject: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  ngOnChanges(changes) {
    if (changes.to.currentValue && changes.to.currentValue !== changes.to.previousValue) {
      this.form.controls['to'].setValue( this.to );
    }
  }

  close = () => this.closeCompose.emit();

  submit() {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i].markAsTouched();
      }
    }
    if (this.form.valid) {
      this.sendEmail.emit(this.form.value);
    }
  }
}
