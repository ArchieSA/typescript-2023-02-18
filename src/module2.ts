// Boolean
export let isTrue: boolean = true;
isTrue = false;

// Number
let num: number = 10;
let float: number = 10.5;
let binary: number = 0b101;
Number.MAX_SAFE_INTEGER;

// BigInt
let bigNumber: bigint = 100n;

// String
let str: string = "string";

// Null
let nullLet: null = null;

// Undefined
let undefinedLet: undefined = undefined;

// Object
let objectLet: { a: string; b: number; c: { f: string } } = {
  a: "",
  b: 123,
  c: { f: "" },
};

// Array
let arrayLet: string[][][][] = [
  [[[""]], [["", ""]]],
  [[[""]], [[""]]],
  [[[""]]],
];
let arrayLet2: string[] = ["", ""];

// Tuple
const tuple: [number, number, string] = [1, 2, ""];

// const useState = (): [number, (value: number) => void] => {};

// const [state, setState] = useState();

// Function

function function1(callback: (a: string) => void): string {
  //   if (callback) {
  //     return callback('');
  //   }
  return "";
}

const arrowFunction = (a: string, b: string): undefined => {
  return;
};

// Any
let anyLet: any;

anyLet = "";
anyLet = {};
anyLet = () => {};

// Unknown
let unknownLet: unknown = { a: "" };

// unknownLet.a;
// let numLet: number = unknownLet;

// Void

// never

// Literal type
let fontWeight: 500 = 500;
let display: "flex" = "flex";

// Union type
let fontWeight2: 500 | 600 | 700 | "bold" = "bold";

let strNum: string | number = 123;
