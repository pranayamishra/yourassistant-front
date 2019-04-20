import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
    registrationForm: FormGroup;
    isSubmitted = false;
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            repeatedPassword: ['', Validators.required]

        });
    }

    register() {
        this.isSubmitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
        this.userService.register(this.registrationForm.value);
        this.router.navigateByUrl('');
    }
    get formControls() { return this.registrationForm.controls; }

}
