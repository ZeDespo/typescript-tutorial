import {Point} from "./tutorials";

// The export keyword allows this class to be used outside of this file.
export class PointClass {

    // In regular JS you need to declare the variables here, but with typescript you can declare them in the constructor below.
    public z: string

    constructor(private _x: number, private readonly _y: number, name?: string) { // ? = optional parameter
        this._x = _x; this._y = _y;
        this.z = name == undefined ? "defaultName" : name
        console.log(this.z)
    }

    draw() {
        console.log(this.z + ": (" + this._x + ", " + this._y + ")")
    }

    getDistance(another: Point): number {
        return this.calcDistance(another.x, true)+ this.calcDistance(another.y, false)
    }

    // getter for the private variable x
    // Note: must compile with "tsc -t es5 tutorials.ts" else an error will be thrown.
    get x(): number {
        return this._x
    }

    // getter for the private readonly variable y
    get y(): number {
        return this._y
    }

    // setter for private variable x. No setter for the variable y since it's read only.
    set x(value: number) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0.")
        }
        this._x = value
    }

    private calcDistance(a: number, horizontal: boolean): number {
        if (horizontal == true) {
            return Math.abs(a - this._x)
        } else {
            return Math.abs(a - this._y)
        }
    }
}