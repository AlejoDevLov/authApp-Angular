import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private fb = inject( FormBuilder );
  public myForm = this.fb.group({
    user: [ '', [Validators.required] ],
    email: [ '', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(6)] ]
  });


  registry(){
    console.log(this.myForm.value);
  }
}
