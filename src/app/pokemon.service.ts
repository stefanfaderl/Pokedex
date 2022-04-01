import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

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
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon?limit=10&offset=0')
      .pipe(
        map((pokemon: any) => pokemon.results)
      );
  }

  // Get Pokemon Data
  getPokemon(name: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon/' + name)
  }
}
