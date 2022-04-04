import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {
  pokemons: Pokemon[] = []; // init an empty array
  isFetching: boolean = false;
  isFetchingImg: boolean = true;

  constructor(
    private pokemonService: PokemonService // dependency injection
  ) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  /* Get PokemonS */
  private getPokemons(): void {
    this.isFetching = true;
    this.pokemonService.getPokemons()
      .subscribe((results: any) => {
        this.getPokemon(results);
        // this.pokemons = result;
        //console.dir(this.pokemons);
      });
  }

  /* GET Pokemon */
  private getPokemon(results): void {
    results.forEach((element: { name: string; }) => {
      this.pokemonService.getPokemon(element.name)
        // console.log(element.name);
        .subscribe((pokemonData: any) => {
          this.pokemons.push(pokemonData);
          this.pokemons.sort((a, b) => a.id - b.id) // debuggen
          this.isFetching = false;
          // const pokeTypes = pokemonData.types.map(pokeType => pokeType.type.name);
          // console.log(pokeTypes.slice(0, 1));
        });
    });
  }

}
