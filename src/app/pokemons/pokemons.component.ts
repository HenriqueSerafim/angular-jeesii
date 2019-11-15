import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonApiService } from "../pokemonapi.service";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"]
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  page:number=1;
  pagina:number;
  pokemonCaught:Pokemon;
  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.getPokemons();
    console.log(this.pokemons);
    
  }
   CatchPokemon(pokemon:Pokemon) {
    this.pokemonApiService.setPokemon(pokemon);
  }

  getPokemons(): void {
    this.pokemonApiService
      .gottaCacthEmAll()
      .subscribe(dados => (this.pokemons = dados.results));
  }
}
