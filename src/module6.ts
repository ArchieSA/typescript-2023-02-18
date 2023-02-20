export type Error = {
  type: string;
  [key: string]: unknown;
};

type Record = {
  [key: string]: string;
};

interface Owner {
  name: string;
  age: number;
  height: number;
  surname: string;
}

const owner: Owner = {
  name: "",
  age: 12,
  height: 12,
  surname: "",
};

type NameType = Owner["name"];

type PartialOwner = {
  [Property in keyof Owner]?: Owner[Property];
};

const partialOwner: CustomPartial<Owner, "name" | "surname"> = {
  age: 12,
  height: 12,
};

type CustomPartial<Structure, Key extends keyof Structure> = Partial<
  Pick<Structure, Key>
> &
  Omit<Structure, Key>;

type CustomPReadonly<Structure, Key extends keyof Structure> = Readonly<
  Pick<Structure, Key>
> &
  Omit<Structure, Key>;

type ReadonlyOwner = {
  readonly [Property in keyof Owner]: Owner[Property];
};

type RequiredOwner = {
  [Property in keyof Owner]-?: Owner[Property];
};

type NoReadonlyOwner = {
  -readonly [Property in keyof Owner]: Owner[Property];
};

type OwnerGetters = {
  [Property in keyof Owner as `get${Capitalize<Property>}`]: () => Owner[Property];
};
type OwnerSetters = {
  [Property in keyof Owner as `set${Capitalize<Property>}`]: (
    value: Owner[Property]
  ) => void;
};

type Getters<T> = {
  [Property in keyof T as `get${Capitalize<
    Property & string
  >}`]: () => T[Property];
};
type Setters<T> = {
  [Property in keyof T as `set${Capitalize<Property & string>}`]: (
    value: T[Property]
  ) => void;
};

type CompleteType<T> = T & Getters<T> & Setters<T>;

// class Example implements CompleteType<Owner> {
//   name: string;
//   age: number;
//   height: number;
//   surname: string;
//   getName: () => string;
//   getAge: () => number;
//   getHeight: () => number;
//   getSurname: () => string;
//   setName: (value: string) => void;
//   setAge: (value: number) => void;
//   setHeight: (value: number) => void;
//   setSurname: (value: string) => void;
// }
