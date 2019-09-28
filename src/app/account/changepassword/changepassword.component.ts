import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../backend-service/user.service';
import {AlertService} from '../../alert/alert.service';
import {MustMatch} from '../../helpers/customvalidators'

@Component({
    selector: 'app-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

    constructor(private userService: UserService, private alertService : AlertService, private formBuilder: FormBuilder) { }
    changePasswordForm: FormGroup;
    isSubmitted = false;
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            password: ['', Validators.required],
            newPassword: ['', Validators.required],
            repeatedNewPassword: ['', Validators.required]
        },{
			validator: MustMatch('newPassword','repeatedNewPassword')
		});
    }
    changePassword() {

        this.isSubmitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        this.userService.changePassword(this.changePasswordForm.value);
        this.alertService.success('Password changed successfully');

    }
    get formControls() { return this.changePasswordForm.controls; }


}
