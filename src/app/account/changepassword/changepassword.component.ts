import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

    constructor(private userService: UserService, private formBuilder: FormBuilder) { }
    changePasswordForm: FormGroup;
    isSubmitted = false;
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            password: ['', Validators.required],
            newPassword: ['', Validators.required],
            repeatedNewPassword: ['', Validators.required]
        });
    }
    changePassword() {
        window.alert('hi');

        this.isSubmitted = true;
        if (this.changePasswordForm.invalid) {
            window.alert('inside');

            return;
        }
        this.userService.changePassword(this.changePasswordForm.value);
        window.alert('done');

    }
    get formControls() { return this.changePasswordForm.controls; }


}
