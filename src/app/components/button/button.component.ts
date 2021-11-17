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
  public editId!: number;
  contactData: any;
  defValue: string = 'tu hi default';
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

    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: [''],
    });
  }
  onDelete(id: number) {
    this.contactData.splice(id, 1);
  }
  onUpdate(id: number) {
    console.log('onupdate open : ', id);
    this.editId = id;
    this.contactData[id] = this.contactForm.value;
  }
  onUpdateSubmit() {
    this.contactData[this.editId] = {
      fullName: this.contactForm.value.fullName
        ? this.contactForm.value.fullName
        : this.contactData[this.editId].fullName,
      email: this.contactForm.value.email
        ? this.contactForm.value.email
        : this.contactData[this.editId].email,
      message: this.contactForm.value.message
        ? this.contactForm.value.message
        : this.contactData[this.editId].message,
    };
  }
}
