import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  color: string;
  nom: string;
  constructor() {}

  ngOnInit(): void {
    this.color = "red";
    this.nom = "Dyma";
  }

  coucou(): void {
    console.log("Bonjour à tous");
  }
}
