import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  // standalone: true,
  // imports: [
  //   FormsModule,
  //   InputComponent,
  // ],
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
