import { Component } from "@angular/core";
import { SignUpService } from "../shared/components/sign-up/sign-up.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(
        private signUpService: SignUpService
    ) {}

    login() {}

    signUp() {
        this.signUpService.showPopUp()
    }
}