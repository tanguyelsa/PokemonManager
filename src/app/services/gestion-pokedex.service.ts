import {Injectable} from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class GestionPokedexService {

  private _pokemons: Pokemon[];

  constructor() {
    this._pokemons = [
      new Pokemon(1, 1, "Bulbizarre", "graine", ["plante", "poison"], 70, 6.9),
      new Pokemon(1, 2, "Herbizarre", "graine", ["plante", "poison"], 100, 13),
      new Pokemon(1, 3, "Florizarre", "graine", ["plante", "poison"], 200, 100),
      new Pokemon(1, 4, "Salamèche", "lézard", ["feu"], 60, 8.5),
      new Pokemon(1, 5, "Reptincel", "flamme", ["feu"], 110, 19),
      new Pokemon(1, 6, "Dracofeu", "flamme", ["feu", "vol"], 170, 90.5)
    ]
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  public getNbPokemons():number{
    return this._pokemons.length;
  }
}
