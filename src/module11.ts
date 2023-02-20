export class Animal {
  feed(): void {}
}

class Horse extends Animal {}

type Constructor = new (...args: any[]) => {};

function Movable<BaseConstructor extends Constructor>(Base: BaseConstructor) {
  return class BaseWithMove extends Base {
    speed: number = 0;
    move() {}
  };
}

const MovableHorse = Movable(Horse);

const horse = new MovableHorse();
horse.move();
horse.feed();
