// boolean

let muted:boolean = true

muted = false

// number

let num:number = 42
let den:number = 6
let res:number = num / den

// string

let nombre:string = 'omar'
let saludo:string = `me llamo ${nombre}`

//arrays

let people:string[] = []

people = ['omar']

let peopleAndNumbers:Array<string | number> = []
peopleAndNumbers = ['enrique', 2]


//enum

enum Color {
    red = 'red',
    green = 'green',
    blue = 'blue'
}

let favoriteColor:Color = Color.red

console.log(favoriteColor)

// any

let joker:any = '*'

joker = 1
joker = {joker: '*'}

// object

let obj:object = {}
obj = []


// functiones 

function add (a:number, b:number):number {
    return a + b
}

const sum = add(4, 6)

function createAdder (a:number): (number) => number {
    return function (b:number) {
        return a + b
    }
}

const createAddFour = createAdder(4)
const fourPlus6 = createAddFour(6)

function fullName(firstName:string, lastName?:string):string {
    return `${firstName} ${lastName}`
}

const omar = fullName('Omar')


// interfaces

enum color {
    red = 'red',
    green = 'green'
}

interface rectangle {
    width: number
    height: number,
    color: color
}

let rect:rectangle = {
    width: 4,
    height: 6,
    color: color.red
}

function areaCalc (r: rectangle) {
    return r.height * r.width
}

rect.toString = function () {
    return `un rectángulo ${this.color}`
}