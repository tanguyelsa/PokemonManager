import { Component, OnInit } from '@angular/core';
import {GestionPokedexService} from "../../services/gestion-pokedex.service";
import {Generation} from "../../modeles/Generation";


@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  private _generations : Generation[];

  constructor(public svc : GestionPokedexService) {
    this._generations = svc.generations;
  }

  get generations(): Generation[] {
    return this._generations;
  }

  ngOnInit(): void {
  }

  selectionnerGeneration(numero:number) : void{
    this.svc.idGenerationSelectionnee = numero;
  }
}
