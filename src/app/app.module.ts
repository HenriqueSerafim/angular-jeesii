import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { AppComponent } from "./app.component";
import { PokemonApiService } from "./pokemonapi.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { JwPaginationComponent } from 'jw-angular-pagination';

const routes: Routes = [
  { path: "", component: PokemonsComponent },
  { path: "pokemons/:pokemonId", component: PokemonDetailsComponent },
  { path: "pokemons", component: PokemonsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
     FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)],
  declarations: [AppComponent, PokemonsComponent, PokemonDetailsComponent,JwPaginationComponent],
  bootstrap: [AppComponent,PokemonsComponent,PokemonDetailsComponent ],
  providers: [PokemonApiService],
  exports: [RouterModule]
})
export class AppModule {}
