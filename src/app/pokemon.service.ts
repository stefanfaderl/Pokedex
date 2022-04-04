import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';
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

  /* Get Pokemons */
  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon?limit=150&offset=0')
      .pipe(
        map((pokemon: any) => pokemon.results),
        tap(_ => console.log('fetched pokemons successfully')),
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
  }

  // Get Pokemon by name
  getPokemon(name: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.defaultUrl + 'pokemon/' + name)
  }

  /* Onclick get pokemon by id. Will 404 if id not found */
  getPokemonById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.defaultUrl + 'pokemon/' + id)
      .pipe(tap(_ => console.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Pokemon>(`getHero id=${id}`)));
  }

  /*
 Handle Http operation that failed.
 Let the app continue.
 @param operation - name of the operation that failed
 @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
