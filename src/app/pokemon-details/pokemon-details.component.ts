import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | any; // normal undefined
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonById(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }
}
