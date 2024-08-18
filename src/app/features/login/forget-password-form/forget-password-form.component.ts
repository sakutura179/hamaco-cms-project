import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-forget-password-form',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
  ],
  templateUrl: './forget-password-form.component.html',
  styleUrl: './forget-password-form.component.scss'
})
export class ForgetPasswordFormComponent {
  username = '';
  newPassword = '';
  confirmPassword = '';

  onSubmit() {
    console.log('ForgetPasswordFormComponent Submit');
    console.log(this.username);
    console.log(this.newPassword);
  }

  test() {
    console.log(123);
  }
}
