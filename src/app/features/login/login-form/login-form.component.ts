import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private form = viewChild.required<NgForm>('loginForm');
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  isLogin = false;

  constructor() {
    //this function is executed once the component has been rendered for the first time
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      setTimeout(() => {
        if (savedForm) {
          const loadedFormData = JSON.parse(savedForm);
          const savedEmail = loadedFormData.email;
          this.form().controls['email'].setValue(savedEmail);
        }
      }, 1);


      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        //executed for every new value emitted
        //Discard the new value if it is emitted within that timeframe
        next: (value) =>
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          )
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    })
  }

  onSubmit(formData: NgForm) {
    console.log(formData.form.value.email);
    console.log(formData.form.value.password);
    formData.form.reset();
    this.router.navigate(['/supply']);
    this.isLogin = true;
  }
}
