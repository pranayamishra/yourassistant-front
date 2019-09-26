import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

	private subscription: Subscription;
	message: any;
    public isVisible: boolean = false;

	constructor(private alertService: AlertService) { }

	ngOnInit() {
		this.subscription = this.alertService.getMessage().subscribe(message => {
			this.isVisible = true;
			this.message = message;
			setTimeout(()=> this.isVisible = false,2500); // hide the alert after 2.5s
		});

	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
