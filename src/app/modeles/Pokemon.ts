export class Pokemon{

  private _generation : number;
  private _id : number;
  private _nom : string;
  private _espece : string;
  private _types : string[];
  private _taille : number;
  private _poids : number;
  private _image : string;


  constructor(generation: number, id: number, nom: string, espece: string, types: string[], taille: number = -1, poids: number = -1) {
    this._generation = generation;
    this._id = id;
    this._nom = nom;
    this._espece = espece;
    this._types = types;
    this._taille = taille;
    this._poids = poids;
    this._image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id.toString()+".png";
  }


  get generation(): number {
    return this._generation;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }


  get espece(): string {
    return this._espece;
  }


  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get taille(): number {
    return this._taille;
  }


  get poids(): number {
    return this._poids;
  }


  get image(): string {
    return this._image;
  }
}
