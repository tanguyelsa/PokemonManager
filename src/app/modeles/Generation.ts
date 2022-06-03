

export class Generation{
  private _id : number;
  private _nom : string;

  constructor(id: number) {
    this._id = id;
    if (id==0){
      this._nom="Tous les Pokémons";
    }
    else{
      this._nom = "Génération " + id.toString();
    }

  }

  get id(): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }
}
