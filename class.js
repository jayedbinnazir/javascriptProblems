console.log('Class') ;

class Class {  
    user = 'Junayed';
    admin = 'Zubayer'
    constructor(name){
        this.name = name ;
        this.said = function(){
            console.log('I am shouting from constructor')
        }
    }

   say(){
        console.log(`I said ${this.name}`)
    }
}
console.log({Class})
let objectClass = new Class('Jayed') ;
console.log({objectClass}) ;
console.log(objectClass.name) ;
objectClass.say() ;


for (let key in objectClass){
    console.log(key)
}

let keys = Object.keys(objectClass);
let values = Object.values(objectClass);
let entries = Object.entries(objectClass);
console.log({keys , values , entries}) ;

let map = new Map(entries);
console.log(map) ;

let plainObject = Object.fromEntries(map) ;
console.log({plainObject})

//Class is a function 

console.log( typeof Class) ;

console.log(Class === Class.prototype.constructor ) ;

console.log(Object.getOwnPropertyNames(objectClass))
console.log(Object.getOwnPropertyNames(Class.prototype)) ;


// We can create same functionality with object constructor function 

function ObjectFuncion(name){
    this.name = name ;
    this.said = function(){
        console.log('I m shouting from Object Constructor function')
    } ;

}
ObjectFuncion.prototype.say = function (){
    console.log(`I m from constructor ${this.name}`)
}
let objectConstruct = new ObjectFuncion('Jarin');
console.log({objectConstruct})


// Now what is the difference


















//Extends 

class Animal {
    constructor(name){
        this.speed = 0
        this.name=name
    }

    run(speed){
        this.speed = speed ;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed = 0 ;
        console.log(`${this.name} stand still`)
    }
}

console.log({Animal}) ;

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} Hides`)
    }
}
console.log({Rabbit})

let animal = new Animal('My Animal') ;

let rabbit = new Rabbit('White Rabbit') ;

console.log({animal , rabbit})

