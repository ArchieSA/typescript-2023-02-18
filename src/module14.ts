import "reflect-metadata";

export class Test {
  a = "123";

  //   @Logger("=")
  calculate() {
    // logic
  }
}

// function Logger(devider: string = "-") {
//   return (
//     target: Object,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     const method = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//       console.log("target:", target);
//       console.log(new Array(10).join(devider));
//       console.time(propertyName);
//       const result = method.apply(this, args);
//       console.timeEnd(propertyName);
//       console.log(new Array(10).join(devider));

//       return result;
//     };
//   };
// }

// new Test().calculate();

// type Constructor = new (...args: any[]) => {};

// @Injectable({
//   provideIn: "root",
// })
// class UserService {}

// interface InjectOptions {
//   provideIn: string;
// }

// const injectableMetaKey = "InjectableMeta";

// function Injectable(options: InjectOptions) {
//   return (ctor: Constructor) => {
//     Reflect.defineMetadata(injectableMetaKey, options, ctor);
//   };
// }

// function isInjectOptions(metadata: unknown): metadata is InjectOptions {
//   const injectOptions = metadata as InjectOptions;

//   return "provideIn" in injectOptions;
// }

// const RootInstanceMap = new Map();

// function getInstance<T>(ctro: new () => T): T {
//   const metadata = Reflect.getMetadata(injectableMetaKey, ctro);

//   if (!metadata || !isInjectOptions(metadata)) {
//     return new ctro();
//   }

//   if (metadata.provideIn === "root") {
//     if (!RootInstanceMap.has(ctro)) {
//       RootInstanceMap.set(ctro, new ctro());
//     }

//     return RootInstanceMap.get(ctro);
//   }

//   return new ctro();
// }

// class BullDog {
//   @Condition({
//     range: {
//       from: 9,
//       to: 14,
//     },
//   })
//   public height: number;

//   constructor(height: number) {
//     this.height = height;
//   }
// }

// class Corgi {
//   @Condition({
//     equality: 12,
//   })
//   public height: number;

//   constructor(height: number) {
//     this.height = height;
//   }
// }

// interface ConditionOptions {
//   range?: {
//     from: number;
//     to: number;
//   };
//   equality?: number;
// }

// const conditionOptionsKey = "conditionOptions";

// function Condition(options: ConditionOptions) {
//   return (object: Object, propertyName: string) => {
//     Reflect.defineMetadata(
//       `${conditionOptionsKey}_${propertyName}`,
//       options,
//       object.constructor
//     );
//   };
// }

// function validate<T extends {}>(object: T): boolean {
//   const properties = Object.getOwnPropertyNames(object);

//   return properties.every((propertyName) => {
//     const metadata = Reflect.getMetadata(
//       `${conditionOptionsKey}_${propertyName}`,
//       object.constructor
//     ) as ConditionOptions;

//     if (!metadata) {
//       return true;
//     }

//     const { range, equality } = metadata;
//     const value = object[propertyName as keyof object];

//     if (range) {
//       return value >= range.from && value <= range.to;
//     }

//     if (equality) {
//       return value === equality;
//     }

//     return true;
//   });
// }
