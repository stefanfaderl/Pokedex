import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  // Get Pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2`)
  }

  // Get more Pokemons Data
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getImage() {

  }
}
