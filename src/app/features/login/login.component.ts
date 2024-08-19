import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [
  //   FormsModule,
  //   LoginFormComponent,
  //   ForgetPasswordFormComponent
  // ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  currentMode: 'LOGIN' | 'FORGOT' = 'LOGIN';

  changeMode() {
    if (this.currentMode == 'LOGIN') {
      this.currentMode = 'FORGOT';
    } else {
      this.currentMode = 'LOGIN';
    }
  }

}
