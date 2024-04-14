import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { FooterModule } from "../shared/components/footer/footer.module";
import { SignUpModule } from "../shared/components/sign-up/sign-up.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FooterModule,
        SignUpModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}