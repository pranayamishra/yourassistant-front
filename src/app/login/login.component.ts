import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../domain/user';
import { UserService } from '../backend-service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
    loginForm: FormGroup;
	isSubmitted = false;
	success = 0;
    user : User; 

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    login() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
			return;
		}
		this.success = 1;
		
		this.user = this.userService.login(this.loginForm.value);
		if(this.user != null) {
			this.success = 2;
			this.router.navigateByUrl('/account/customeraccount');
		}
    }
    get formControls() { return this.loginForm.controls; }

}
