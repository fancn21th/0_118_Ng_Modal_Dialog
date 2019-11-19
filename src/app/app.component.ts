import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CustomPropertyBindingComponent } from "./custom-property-binding/custom-property-binding.component";

/**
 * @title Dialog Overview
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomPropertyBindingComponent, {
      width: "auto",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
