import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "custom-property-binding",
  templateUrl: "./custom-property-binding.component.html",
  styleUrls: ["./custom-property-binding.component.css"]
})
export class CustomPropertyBindingComponent {
  constructor(public dialogRef: MatDialogRef<CustomPropertyBindingComponent>) {
    for (let i = 1; i <= 10; i++) {
      this.cps.push("custom property name");
    }
    for (let i = 1; i <= 10; i++) {
      this.tags.push("tag name");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cps = [];

  tags = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
