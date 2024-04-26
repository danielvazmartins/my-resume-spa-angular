import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SignUpComponent } from "./sign-up.component";
import { PopUpModule } from "../pop-up/pop-up.module";

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PopUpModule
    ],
    exports: [
        SignUpComponent
    ]
})
export class SignUpModule {}