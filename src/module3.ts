export enum Size {
  s = "s",
  m = 1,
  l = "l",
}

const size: Size = Size.l;
console.log(size);

export enum MovieKindEnum {
  film = "film",
  tvSeries = "tvSeries",
  tvShow = "tvShow",
}

const movie = {
  __typename: "Movie",
};

["film", "tvSeries"].includes(MovieKindEnum.film);

let movieKind: "film" | "tvSeries" | "tvShow" = "tvShow";

export const MovieKind = {
  film: "film",
  tvSeries: "tvSeries",
  tvShow: "tvShow",
} as const;
