import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../domain/user';
import { UserService } from '../backend-service/user.service';
import { AlertService } from '../alert/alert.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private userService: UserService, private alertService: AlertService, private router: Router) { }
	isSubmitted = false;
	loginForm: FormGroup;

	user: User = new User();

	ngOnInit() {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required)
		});
	}
	login() {
		if (this.loginForm.invalid) {
			return;
		}

		let returnedUser = this.userService.login(this.user);
		if (returnedUser != null) {
			this.router.navigateByUrl('/account/customeraccount');
		}
		this.alertService.error('Email or Password is wrong! Please try again.')

	}

	public hasSpecificError = (controlName: string, errorName: string) => {
		return this.loginForm.controls[controlName].hasError(errorName);
	}

	public hasNoError = (controlName: string) => {;
		 return this.loginForm.controls[controlName].valid && this.user.email != '';
	}

}
