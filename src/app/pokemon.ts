import {Type} from "./type";
import {Sprite} from "./sprite";
export class Pokemon {
    height:number;
  id:number;
  name: string;
  types:Type[];
  sprite:string;
  weight:number;
  getPic(){
   return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png";
  }
}
