import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "./sign-up.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    showPopUp: boolean = false
    formSignUp!: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private signUpService: SignUpService
    ) {}

    ngOnInit() {
        this.signUpService.listenState()
        .subscribe(state => this.showPopUp = state)

        this.initForm()
    }

    initForm() {
        this.formSignUp = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        })
    }

    btClose() {
        this.showPopUp = false
    }

    btSignUp() {
        console.log(this.formSignUp.getRawValue())
    }
}