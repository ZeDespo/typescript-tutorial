/* RUNNING PROGRAMS
* Typescript acts as a compiler for Javascript.
* tsc tutorial.js will compile the program and convert it into Javascript. */

/* VARIABLE DECLARATION */
// Also known as Javascript fuckery
// var assigns a variable that could be used for the ENTIRE runtime of the function
function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log("Finally: " + i)
}

// Let assigns a variable in the current scope. Will throw an error if try to reference again
// Typescript will NOT let this code compile if we uncomment out the log line.
function doSomethingLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    try {
        // console.log("Finally (let): " + i)
    } catch(e) {
        console.log(e)
    }

}

doSomethingLet()
doSomethingVar()

/* TYPES */
let count: number = 5; // Strict type annotation
// count = "a" // Won't work, since we declared count as an int.
let variable: any;
variable = 1
variable = "a"
variable = true
let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a', false] // Not good practice

const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

// If we want to work with a collection of related constants we
// can use the enum keyword instead!

enum Color { Red = 0, Green= 1, Blue = 2}
let backgroundColor: number = Color.Red

/* TYPE ASSERTIONS */
// If you are unsure of the variables type you can assume / asser the type of the variable
// so you don't get any runtime variable errors.
let message // Assumed a type of any
message = 'abc'
let lastChar: string = (<string>message).charAt(message.length - 1)
let alternateLastChar: string = (message as string).charAt(message.length - 1) // more common

/* ARROW FUNCTIONS
* IMPORTANT FOR TYPESCRIPT WITH ANGULAR / REACT APPLICATIONS
*
* A CLEAN way to define functions. */

// Normal Javascript way to declare a function
let log = function (message) {
    console.log(message)
}

// Typescript's shorter way to declare a function
let doLog = (message) => {
    console.log(message);
}

// An even shorter way since this is a one lined function
let doLogOneLine = (message) => console.log(message)

// No Parameters here
let doLogNoParams = () => console.log("No parameters here")

log("Hello")
doLog("Here are some")
doLogOneLine("arrow functions and now one with")
doLogNoParams()

/* INTERFACES (CUSTOM TYPES)
* Almost the EXACT same thing with Go!*/

// Do NOT overload your functions this way!
// Too many parameters. Not readable at all.
let drawPoint = (x: number, y: number, z: string, a1: boolean, b2: bigint, c3: string) => {
    // Do a thing
}
// The export keyword allows this interface to be used outside of this file.
export interface Point { // Custom types should ALWAYS be capatalized.
    x: number
    y: number
    z: string
    funcSignature: (x: number, y: number, name: string) => void // Function signatures just like in Go
}
let draw = (x: number, y: number, name: string) => console.log(name + ": (" + x + ", " + y + ")")
// For sake of brevity, will omit the last three parameters
// You can do this but it's messy as hell still. You added more characters!
let drawPointUndefinied = (point: {x: number, y: number, z: string, funcSignature: (x: number, y: number, name: string) => void}) => {
    point.funcSignature(point.x, point.y, point.z)
}
let drawPointDefinied = (point: Point) => {
    point.funcSignature(point.x, point.y, point.z)
}
drawPointUndefinied({x: 1, y: 2, z: "point1", funcSignature: draw})
let pointInterface: Point = {x: 1, y: 2, z: "point2", funcSignature: draw}
drawPointDefinied(pointInterface)


/* CLASSES
* Interfaces are great and all but they are purely for declaration. They are not for implementation purposes
* Classes should exist in their own files as modules. And should be imported
* to whatever file would need it.*/

import {PointClass} from "./point";

let pointObject: PointClass = new PointClass(0, 0, )
console.log(pointObject.getDistance({x: 10, y: 12, z: "point2", funcSignature: draw}))
pointObject.x = 5
console.log(pointObject.getDistance({x: 10, y: 12, z: "point2", funcSignature: draw}))
