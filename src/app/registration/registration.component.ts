import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../backend-service/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    constructor(private userService: UserService, private alertService: AlertService, private router: Router, private formBuilder: FormBuilder) { }
    registrationForm: FormGroup;
	isSubmitted = false;
	isSuccess = 0;
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
			email: ['', Validators.required, Validators.minLength(5)],
            password: ['', Validators.required],
            repeatedPassword: ['', Validators.required]

        });
    }

    register() {
        this.isSubmitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
		this.isSuccess = this.userService.register(this.registrationForm.value);
		if(this.isSuccess == 1 && this.userService.login(this.registrationForm.value) != null) {
			this.router.navigateByUrl('/account/customeraccount');   
		} else {

			this.alertService.error('Registration not possible! Probably Email Already is registered. Try to reset Password.')
		}
	
	}
    get formControls() { return this.registrationForm.controls; }

}
