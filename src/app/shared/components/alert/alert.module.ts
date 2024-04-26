import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./alert.component";
import { PopUpModule } from "../pop-up/pop-up.module";

@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        CommonModule,
        PopUpModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule {}