import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CustomPropertyBindingComponent } from "./custom-property-binding/custom-property-binding.component";

@NgModule({
  declarations: [AppComponent, CustomPropertyBindingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    DragDropModule
  ],
  entryComponents: [CustomPropertyBindingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
