import { Component, OnInit } from '@angular/core';
import {GestionPokedexService} from "../../services/gestion-pokedex.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(public svc : GestionPokedexService) {

  }


  ngOnInit(): void {
  }

}
