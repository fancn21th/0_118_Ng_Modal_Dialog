import { Component, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem
} from "@angular/cdk/drag-drop";
import { MatDialogRef } from "@angular/material";
import { cps } from "../mock/cps";
import { tags } from "../mock/tags";

@Component({
  selector: "custom-property-binding",
  templateUrl: "./custom-property-binding.component.html",
  styleUrls: ["./custom-property-binding.component.css"]
})
export class CustomPropertyBindingComponent {
  @Input() cps: any;
  @Input() tags: any;
  private selectedTag: any = null;
  private selectedTagMetaData: any = [];
  private name: string;

  constructor(public dialogRef: MatDialogRef<CustomPropertyBindingComponent>) {
    this.cps = cps;
    this.tags = tags;
  }

  onTagSelect(selectedTag: any): void {
    this.selectedTag = selectedTag;
    this.selectedTagMetaData = this.convertTagMetaData(selectedTag.tagMetaData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // this.cps.splice(0, 1, event.previousContainer.data[event.previousIndex]);
    }
  }

  // private methods
  private convertTagMetaData(tagMetaData: any): any {
    return Object.keys(tagMetaData).map(key => ({
      key,
      value: tagMetaData[key]
    }));
  }
}
