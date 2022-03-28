import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsOverviewComponent } from './pokemons-overview.component';

describe('PokemonsOverviewComponent', () => {
  let component: PokemonsOverviewComponent;
  let fixture: ComponentFixture<PokemonsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
