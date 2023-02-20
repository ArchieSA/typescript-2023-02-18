abstract class Animal {
  constructor(public height: number, public weight: number) {}

  abstract move(): void;

  bark(): void {
    console.log("bark");
  }
}

class Wolf extends Animal {
  move(): void {
    console.log("move");
  }
}

const wolf = new Wolf(12, 12);
wolf.bark();
wolf.move();

export class Pet {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

export class Dog extends Pet {
  constructor(public color: string, name: string) {
    super(name);
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (!name) return;

    this._name = name;
  }
}

const dog = new Dog("fawn", "Richard");
dog.color;
dog.name;

abstract class Node {
  constructor(private width: number, private height: number) {}

  get nodeWidth() {
    return this.width;
  }

  abstract paint(): void;
  abstract calculateSize(): void;
}

class CircleNode extends Node {
  paint(): void {
    throw new Error("Method not implemented.");
  }
  calculateSize(): void {
    throw new Error("Method not implemented.");
  }
}

class ExtraCircleNode extends CircleNode {
  paint(): void {
    // super.paint();
  }
}
