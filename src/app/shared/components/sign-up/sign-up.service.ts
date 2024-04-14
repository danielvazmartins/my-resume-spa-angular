import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    signUpSubject: Subject<boolean> = new Subject()

    listenState() {
        return this.signUpSubject.asObservable()
    }

    showPopUp() {
        this.signUpSubject.next(true)
    }
}