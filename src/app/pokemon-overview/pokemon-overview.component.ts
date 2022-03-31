import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../pokemon-list';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {
  pokemons: PokemonList[] = []; // init an empty array

  constructor(
    private pokemonService: PokemonService // dependency injection
    ) {
  }

  ngOnInit(): void {
    // this.getPage(this.offset);
    this.getPokemons();
  }

  private getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe((result: any) => {
        console.log(result);
        console.log(result.results); // ist gleich das ganze array. ts classe bauen details? aber dann in service ts
        this.pokemons = result.results;
      })
  }
}

/*
Next method to offset

    this.pokemonService.getPokemons()
      .subscribe((response: any) => {
        console.log(response);
        response.results.forEach(result => {
          this.pokemonService.getMoreData(result.name)
            .subscribe((pokemonData: any) => {
              this.pokemons.push(pokemonData);
              console.log(this.pokemons);
            });
        });
      });
*/
