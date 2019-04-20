import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-personaldata',
    templateUrl: './personaldata.component.html',
    styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {

    constructor(private userService: UserService, private formBuilder: FormBuilder) { }
    customerProfileForm: FormGroup;
    isSubmitted = false;
    ngOnInit() {
        this.customerProfileForm = this.formBuilder.group({
            gender: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
        });
    }
    save() {
        // window.alert(this.customerProfileForm.controls.firstName.value);
        this.isSubmitted = true;
        if (this.customerProfileForm.invalid) {
            return;
        }
        this.userService.update(this.customerProfileForm.value);
    }
    get formControls() { return this.customerProfileForm.controls; }

}
