import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
  providers: [MessageService]
})
export class PokemonOverviewComponent implements OnInit {
  pokemons: Pokemon[] = []; // init an empty array
  isFetching: boolean = false;
  isFetchingImg: boolean = true;
  searchValue: string | number;
  searchPokemon: Pokemon;
  isSearching = false;


  constructor(
    private pokemonService: PokemonService, // dependency injection
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getPokemons();
    this.primengConfig.ripple = true;
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

  onSearchPokemon(value: string | number): void {
    this.isSearching = true;
    let checkTypeValue = value;

    if (typeof checkTypeValue == 'number') {
      this.searchValue = checkTypeValue;
    }
    else {
      let convertValue = this.convertValueToLowerCase(checkTypeValue);
      this.searchValue = convertValue;
    }

    this.pokemonService.getPokemon(this.searchValue)
      .subscribe((pokemon: any) => {
        this.searchPokemon = pokemon;
        // console.log(this.searchPokemon);
      }, (error: any) => {
        // console.log(error);
        if (error.status === 404) {
          this.showError(error.status, 'Sorry, Pokemon not found :(')
        }
      }
      )
  }
  convertValueToLowerCase(checkTypeValue: string) {
    return checkTypeValue.toLowerCase();
  }

  showError(_error: any, text: string) {
    this.messageService.add({ key: 'c', severity: 'error', summary: _error, detail: text, life: 3000 });
  }

  refresh(): void {
    window.location.reload();
  }
}
