import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {
  pokemons: any[] = []; // init an empty array

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
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
  }

/*
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // Waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property. As a rule, an Observable does nothing until something subscribes.
  }
*/

}

/*
Next method to offset


*/
