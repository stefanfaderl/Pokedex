export interface Pokemon {
  name: string,
  img: string,
  type: string,
  id: number,
  types: Type[]
}

interface Type {
  slot: number;
  type: {
    name: string;
  }
}
