import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  artists = [
    "Artist I - Davido",
    "Artist II - Wizkid",
    "Artist III - Burna Boy",
    "Artist IV - Kiss Daniel",
    "Artist V - Mayorkun",
    "Artist VI - Mr. Eazi",
    "Artist VII - Tiwa Savage",
    "Artist VIII - Blaqbonez",
    "Artist IX - Banky W",
    "Artist X - Yemi Alade",
    "Artist XI - Perruzi",
    "Artist XII - Seyi Shay",
    "Artist XIII - Teni"
  ];
  artists2 = [
    "Artist 1 - You",
    "Artist 2 - Me",
    "Artist 3 - His",
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data,
      event.previousIndex, event.currentIndex)
      } else {
      moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
      }
  }
  // drop2(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.artists2, event.previousIndex, event.currentIndex);
  // }
}
