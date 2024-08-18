import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  username = '';
  password = '';

  onSubmit() {
    console.log('Submit');
    console.log(this.username);
    console.log(this.password);
  }
}
