import { AfterContentInit, Component, ContentChild, ElementRef, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'input-group'
  }
})
export class InputComponent implements AfterContentInit{
    label = input.required<string>();

    @ContentChild('input') private inputEl!: ElementRef<HTMLInputElement>;
    @ContentChild('icon') private iconEl?: ElementRef;

    ngAfterContentInit(): void {
      if(this.iconEl) {
        this.iconEl.nativeElement.addEventListener('click', () => this.togglePassword())
      }
    }

    togglePassword() {
      if(this.inputEl?.nativeElement.type === 'password') {
        this.inputEl!.nativeElement.type = 'text';
      } else {
        this.inputEl!.nativeElement.type = 'password'
      }
    }
}
