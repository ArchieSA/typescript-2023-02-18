export type Getters<Structure extends object> = {
  [Property in keyof Structure as `get${Capitalize<
    Property & string
  >}`]: () => Structure[Property];
};

type StringGetters = Getters<Movie>;

abstract class AbstractDirector {}

interface MovieActor<Award extends string = string> {
  name: string;
  surname: string;
  birthDate: string;
  awards: Award[];
}

interface Movie<Duration = number, Actor = MovieActor<"oscar" | "goldLion">> {
  title: string;
  releaseYear: number;
  actors: Actor[];
  duration: Duration;
}

interface TvSeriesDuration {
  seasonCount: number;
  seriesInEachSeason: number;
  seriesDuration: number;
}

let film: Movie;
let series: Movie<TvSeriesDuration>;

// function getProperty<
//   Structure extends {},
//   Key extends keyof Structure = keyof Structure
// >(obj: Structure, key: Key) {
//   return obj[key];
// }

const getProperty = <
  Structure extends {},
  Key extends keyof Structure = keyof Structure
>(
  obj: Structure,
  key: Key
) => obj[key];

class Dog<T> {}

new Dog<string>();

const movie: Movie = {
  title: "",
  releaseYear: 2023,
  actors: [],
  duration: 300,
};

getProperty(movie, "duration");
