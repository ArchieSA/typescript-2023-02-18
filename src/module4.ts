interface Owner {
  name: string;
  age: number;
}

interface Pet {
  owner?: Owner;
}

interface Animal {
  readonly color: string;
  weight: number;
}

interface Dog extends Pet, Animal {
  color: "fawn" | "black" | "golden";
}

interface Cat extends Pet, Animal {}

const owner: Owner = { name: "Artem", age: 100 };

export const frenchBulldog: Dog = {
  weight: 12,
  color: "fawn",
  owner,
};

const corgi: Dog = {
  weight: 9,
  color: "golden",
};

corgi.color = "fawn";
