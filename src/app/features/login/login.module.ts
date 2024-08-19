import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ForgetPasswordFormComponent } from "./forget-password-form/forget-password-form.component";
import { FormsModule } from "@angular/forms";
import { InputComponent } from "../../shared/components/input/input.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ForgetPasswordFormComponent
  ],
  imports: [
    FormsModule,
    InputComponent,
    LoginRoutingModule
  ]
})

export class LoginModule {}
