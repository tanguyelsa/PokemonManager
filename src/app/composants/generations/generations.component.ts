import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  private _generations : string[];

  constructor() {
    this._generations = ['Génération I','Génération II','Génération III','Génération IV','Génération V','Génération VI','Génération VII'];
  }

  get generations(): string[] {
    return this._generations;
  }

  set generations(value: string[]) {
    this._generations = value;
  }

  ngOnInit(): void {
  }

}
