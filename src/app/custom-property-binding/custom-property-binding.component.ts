import { Component, OnInit, Inject } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {  MatDialogRef } from "@angular/material";

@Component({
  selector: "custom-property-binding",
  templateUrl: "./custom-property-binding.component.html",
  styleUrls: ["./custom-property-binding.component.css"]
})
export class CustomPropertyBindingComponent {
  constructor(public dialogRef: MatDialogRef<CustomPropertyBindingComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi"
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
