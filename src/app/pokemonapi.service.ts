import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonApiService {
  private PokemonSelecionado = new BehaviorSubject(null);
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient) {}

  gottaCacthEmAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl+'?limit=807');
  }
  gottaCatchNextPage(Pokenumber: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      this.apiUrl + "?limit=40&offset=" + Pokenumber
    );
  }
  gottaCatchPokemonById(id: number): Observable<Pokemon> {
    console.log(this.apiUrl + id);
    return this.http.get<Pokemon>(this.apiUrl + id);
  }
  setPokemon(pokemon): void {
    this.PokemonSelecionado.next(pokemon);
  }
}
