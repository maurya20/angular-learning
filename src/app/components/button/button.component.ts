import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // @Input() color!: string;
  // @Input() text!: string;
  public contactForm!: FormGroup;

  contactData: any;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
    this.contactData = [];
  }

  ngOnInit(): void {}

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: [''],
    });
  }
  logger(p: any) {
    console.log('live ????', p);
  }
  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
    this.contactData = [...this.contactData, this.contactForm.value];
    console.log('after submit all data : ', this.contactData);
  }
  onDelete(id: number) {
    this.contactData.splice(id, 1);
  }
}
