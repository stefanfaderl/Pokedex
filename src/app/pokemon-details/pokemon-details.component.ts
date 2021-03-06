import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private pokemonService: PokemonService
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
    this.router.navigate(['overview']);
  }

  jumpBack(): void {
    let currentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(typeof currentId);
    let newId = currentId -= 1;
    if (currentId === 0) {
      newId = 1;
    }
    this.redirectTo(newId);
  }

  jumpForward(): void {
    let currentId = Number(this.route.snapshot.paramMap.get('id'));
    let newId = currentId += 1;
    this.redirectTo(newId);
  }

  redirectTo(uri: number) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([`pokemon-detail/${uri}`]));
  }
}
