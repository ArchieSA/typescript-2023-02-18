export type Owner = {
  name: string;
  age: number;
};

type Pet = {
  owner?: Owner;
};

type Animal = {
  readonly color: string;
  weight: number;
};

export interface Dog extends Pet, Animal {
  color: DogColors;
}

type DogColors = "fawn" | "black" | "golden";
type Size = "s" | "m" | "l";
