import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from './pokemon-list';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private defaultUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Get Pokemons
  getPokemons(): Observable<PokemonList[]> {
    let response = this.httpClient.get<PokemonList[]>(this.defaultUrl + '/pokemon?limit=20&offset=0');
    console.log(response);
    return response;
  }


/*   // Get more Pokemons Data
  getMoreData(name: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  } */

}

// endpuntk ist ja quasi name
