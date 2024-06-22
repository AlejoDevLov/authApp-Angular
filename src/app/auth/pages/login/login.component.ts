import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router );


  public myForm = this.fb.group({
    email:    ['alejo@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', [ Validators.required, Validators.minLength(6) ] ]
  });


  login() {
    const { email, password } = this.myForm.value;

    this.authService.login( email!, password! )
      .subscribe({
        next: () => { this.router.navigateByUrl('dashboard') },
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }

}
