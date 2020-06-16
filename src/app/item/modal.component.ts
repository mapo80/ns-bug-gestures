import { Component, OnInit } from "@angular/core";
import { BottomSheetParams } from "nativescript-material-bottomsheet/angular";


@Component({
    selector: "ns-modal",
    templateUrl: "./modal.component.html"
})
export class ModalComponent implements OnInit {
    
    constructor(private params: BottomSheetParams) {

    }
    
    ngOnInit(): void {
    
    }

    closeModal() {
        this.params.closeCallback();
    }
}