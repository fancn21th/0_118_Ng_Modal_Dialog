import { Component, Input, Inject } from "@angular/core";
import {
  CdkDragDrop
  // moveItemInArray,
  // copyArrayItem
} from "@angular/cdk/drag-drop";
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
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
  public selectedTag: any = null;
  public selectedTagMetaData: any = [];
  public name: string;
  public tagMetadataList: any;

  constructor(
    public dialogRef: MatDialogRef<CustomPropertyBindingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.data = data;
    this.cps = cps;
    this.tags = tags;
  }

  onTagSelect(selectedTag: any): void {
    this.selectedTag = selectedTag;
    this.selectedTagMetaData = this.convertTagMetaData({
      Value: selectedTag.fqn,
      ...selectedTag.tagMetaData
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDoneClick() {
    this.data.callback(this.cps);
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    } else {
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      const sourceData = event.previousContainer.data[
        event.previousIndex
      ] as any;
      const targetData = event.container.data[event.currentIndex] as any;
      targetData.Value = sourceData.value;
    }
  }

  // private methods
  private convertTagMetaData(tagMetaData: any): any {
    return Object.keys(tagMetaData).map(key => ({
      key,
      value: tagMetaData[key],
      type: typeof tagMetaData[key] || ""
    }));
  }
}
