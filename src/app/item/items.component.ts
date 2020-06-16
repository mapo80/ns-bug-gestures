import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { BottomSheetOptions, BottomSheetService } from 'nativescript-material-bottomsheet/angular';
import { ModalComponent } from "./modal.component";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService,
                private bottomSheet: BottomSheetService,
                private containerRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    openBottomSheet() {

        const options: BottomSheetOptions = {
            viewContainerRef: this.containerRef
        };

        this.bottomSheet.show(ModalComponent, options)
        .subscribe(result => {
            console.log('Option selected:', result);
        });
    }

}
