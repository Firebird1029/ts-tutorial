let isDone: boolean = false;
let decimal: number = 6;
let big: bigint = 100n;

let color: string = "blue";

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let myTuple: [string, number] = ["hello", 10];
// console.log(myTuple[3]);

enum Color {
	Red,
	Green,
	Blue
}

enum Color2 {
	Red = 2,
	Green = 5,
	Blue = 6
}

let c: Color = Color.Green;

let notSure: unknown = 4;
notSure = "test";

if (typeof notSure === "string") {
	const aString: string = notSure;
}

let myAny: any;
myAny = 4;
myAny = "hello";

function warnUser(): void {
	console.log("test");
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
	throw new Error(message);
}

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length; // not allowed in JSX

function printLabel(labeledObj: { label: string }) {
	console.log(labeledObj.label);
}
let myObj = { size: 10, label: "size 10 obj" };
printLabel(myObj);

interface LabeledValue {
	label: string;
}

function printLabel2(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}

interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: "white", area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	return newSquare;
}

interface Point {
	readonly x: number;
	readonly y: number;
}

let ro: ReadonlyArray<number> = [1, 2, 3, 4];
let nro: number[] = ro as number[];

interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = (src, sub) => {
	return false;
};

interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface NumberOrStringDict {
	readonly [index: string]: number | string;
	length: number;
	name: string;
}

interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): void;
}

class Clock implements ClockInterface {
	currentTime: Date = new Date();
	constructor(h: number, m: number) {}
	setTime(d: Date) {
		this.currentTime = d;
	}
}

interface ClockConstructor {
	new (hour: number, minute: number): ClockInterface;
}

const Clock2: ClockConstructor = class Clock implements ClockInterface {
	constructor(h: number, m: number) {}
	currentTime: Date;
	setTime(d: Date): void {
		this.currentTime = d;
	}
};
