import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up.component";
import { CommonModule } from "@angular/common";
import { PopUpModule } from "../pop-up/pop-up.module";
import { ReactiveFormsModule } from "@angular/forms";

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