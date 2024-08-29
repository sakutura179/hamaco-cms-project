import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrl: './forget-password-form.component.scss'
})
export class ForgetPasswordFormComponent {

  onSubmit(formData: NgForm) {
    console.log('ForgetPasswordFormComponent Submit');
    console.log(formData.form.value['email']);
    console.log(formData.form.value['new-password']);
    console.log(formData.form.value['confirm-password']);
    formData.form.reset();
  }
}
