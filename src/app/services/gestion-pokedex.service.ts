import {Injectable} from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {Generation} from "../modeles/Generation";

@Injectable({
  providedIn: 'root'
})
export class GestionPokedexService {

  private _pokemons: Pokemon[];
  private _generations: Generation[];
  private _idGenerationSelectionnee : number;

  constructor() {
    this._pokemons = [

      new Pokemon(new Generation(1), 2, "Herbizarre", "Graine", ["plante", "poison"], 1, 13),
      new Pokemon(new Generation(1), 3, "Florizarre", "Graine", ["plante", "poison"], 2, 100),
      new Pokemon(new Generation(1), 1, "Bulbizarre", "Graine", ["plante", "poison"], 0.7, 6.9),
      new Pokemon(new Generation(1), 4, "Salamèche", "Lézard", ["feu"], 0.6, 8.5),
      new Pokemon(new Generation(1), 5, "Reptincel", "Flamme", ["feu"], 1.1, 19),
      new Pokemon(new Generation(1), 6, "Dracofeu", "Flamme", ["feu", "vol"], 1.7, 90.5),
      new Pokemon(new Generation(2), 152, "Germignon", "Feuille", ["plante"], 0.9, 6.4)
    ]
    this._generations = [
      new Generation(0),
      new Generation(1),
      new Generation(2),
      new Generation(3),
      new Generation(4),
      new Generation(5),
      new Generation(6),
      new Generation(7)
    ]
    this._idGenerationSelectionnee = 0;
  }


  get generations(): Generation[] {
    return this._generations;
  }


  get pokemons(): Pokemon[] {
    this._pokemons.sort(function compare(a, b) {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      }
      else {return 0;}
    });
    return this._pokemons;

  }

  public getNbPokemons(): number {
    return this._pokemons.length;
  }

  public getPokemonsGeneration(numero : number):Pokemon[]{
    let pokemonsGeneration : Pokemon[] = [];
    if (this._idGenerationSelectionnee==0){
      pokemonsGeneration = this.pokemons;
    }
    else {
      for (let pokemon of this.pokemons) {

        if (pokemon.generation.id == numero){
          pokemonsGeneration.push(pokemon);
        }
      }
    }
    return pokemonsGeneration;
  }


  set idGenerationSelectionnee(value: number) {
    this._idGenerationSelectionnee = value;
  }


  get idGenerationSelectionnee(): number {
    return this._idGenerationSelectionnee;
  }
}
