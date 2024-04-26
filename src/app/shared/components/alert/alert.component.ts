import { Component, OnInit } from "@angular/core";

import { Alert } from "./alert.interface";
import { AlertService } from "./alert.service";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    alert!: Alert|null

    constructor(
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.alertService.listenAlert()
        .subscribe(response => this.alert = response)
    }

    btClose() {
        this.alert = null
    }
}