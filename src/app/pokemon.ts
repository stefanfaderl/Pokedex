export class Pokemon {
  constructor(
    public name: string,
    public img: string,
    public type: string,
    public id: number,
    public types: Type[]
  ) { }
}

class Type {
  slot: number;
  type: {
    name: string;
  }
}
