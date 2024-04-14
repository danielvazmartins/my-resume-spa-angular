import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
    @Output() close: EventEmitter<void> = new EventEmitter()

    btClose() {
        this.close.emit()
    }
}