import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonApiService } from "../pokemonapi.service";
import { Pokemon } from "../pokemon";
import { Type } from "../Type";
@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"]
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId: number;
  pokemonCaught: Pokemon;
  pokeSprite: string;
  isShiny: boolean;
  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonApiService
  ) {
    this.isShiny = false;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => (this.pokemonId = +params.get("pokemonId"))
    );

    this.pokemonsService
      .gottaCatchPokemonById(this.pokemonId)
      .subscribe(pokemon => {
        this.pokemonCaught = pokemon; this.pokeSprite = this.pokemonCaught.getPic();
      });
  }
  toggleShiny() {
    this.isShiny = this.isShiny ? false : true;
  }
}
