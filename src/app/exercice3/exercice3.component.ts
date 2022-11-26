import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  statut: boolean;
  hiddenp1: boolean;
  hiddenp2: boolean;
  constructor() {}

  ngOnInit(): void {
    this.statut = true;
    this.hiddenp1 = false;
    this.hiddenp2 = true;
    console.log(this.statut);
  }
  toggle() {
    this.statut = false;
    this.hiddenp1 = true;
    this.hiddenp2 = false;
    console.log(this.statut);
  }
}
