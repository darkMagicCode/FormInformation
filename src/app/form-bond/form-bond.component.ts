import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-bond',
  templateUrl: './form-bond.component.html',
  styleUrls: ['./form-bond.component.scss']
})
export class FormBondComponent {
  registerForm :FormGroup= new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    availableDate: new FormControl('', [Validators.required]),
    expectedSalary: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    maritalStatus: new FormControl('', [Validators.required]),
    attachment: new FormControl('')
  });

  constructor(private router: Router) {}
  errorMes: string = '';
  loading: boolean = false;
  onSubmit(x:any) {
    if (this.registerForm.valid) {
      // this.router.navigate(['/thank-you']);
      console.log(this.registerForm.value);

    }
  }

}
