import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private defaultUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Get Pokemons
  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon?limit=150&offset=0')
      .pipe(
        map((pokemon: any) => pokemon.results)
      );
  }

  // Get Pokemon name
  getPokemon(name: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon/' + name)
  }

  // onclick get Pokemon by ID
  getPokemonById(id: number): Observable<Pokemon[]> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const pokemon = POKEMONS.find(p => p.id === id)!;
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon/' + id);
    /*     console.log(`PokemonService: fetched pokemon id=${id}`);
        return of(pokemon); */
  }
}
