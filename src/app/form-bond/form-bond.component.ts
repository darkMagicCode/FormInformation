import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-bond',
  templateUrl: './form-bond.component.html',
  styleUrls: ['./form-bond.component.scss'],

})
export class FormBondComponent {
  constructor(private router: Router) {}
  errorMes: string = '';
  loading: boolean = false;
  registerForm :FormGroup = new FormGroup({
    "name": new FormControl('', [Validators.required]),
    'position': new FormControl('', [Validators.required] ),
    'availableDate': new FormControl('', [Validators.required]),
    'expectedSalary': new FormControl('', [Validators.required] ),
    'dateOfBirth': new FormControl('', [Validators.required] ),
    'address': new FormControl('', [Validators.required]),
    'phoneNumber': new FormControl('', [ Validators.pattern('^[0-9]*$')]),
    'email': new FormControl('' ,[ Validators.email,Validators.required]),
    'maritalStatus': new FormControl('', [Validators.required] ),
    'attachment': new FormControl('', [Validators.required])
  });


  getErrorMessage() {
    if (this.registerForm.get('email')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.get('email')?.getError('email')? 'Not a valid email' : '';
  }
  onSubmit(registerForm:any) {
    if (this.registerForm.valid) {
      this.router.navigate(['/thanks']);
      console.log(this.registerForm.value);

    }
  }




}
