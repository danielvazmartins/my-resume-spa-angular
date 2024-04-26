import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

import { SignUpService } from "./sign-up.service";
import { UsersService } from "../../services/users.service";
import { AlertService } from "../alert/alert.service";

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
        private signUpService: SignUpService,
        private usersService: UsersService,
        private alertService: AlertService
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
        if (this.formSignUp.valid) {
            const { fullName, email, password } = this.formSignUp.value

            this.usersService.create(fullName, email, password)
            .subscribe(response => {
                console.log(response)
                if (response.status === 'success') {
                    this.alertService.msgSuccess('Cadastro efetuado com sucesso!')
                    this.showPopUp = false
                }
            }, (error: HttpErrorResponse) => {
                if (error.status === 400) {
                    const errorMessage: string = <string>Object.values(error.error.message[0].constraints)[0]
                    this.alertService.msgError(errorMessage)
                } else if (error.status === 403) {
                    this.alertService.msgError(error.error.message)
                } else {
                    this.alertService.msgError('Ocorreu um erro, tente novamente!')
                }
            })
        } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!')
        }
    }
}