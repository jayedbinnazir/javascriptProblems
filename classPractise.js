class Animal {
  admin='Rashed'
  constructor(){
    this.name = 'animal'
    this.say=function(){
      console.log('I m from Animal constructor')
    }
    
  }

  said(){
    console.log('i m from animal prototype')
  }

  static story(){
    console.log(`i m a static story of ${this.name}`)
  }

}

let animal = new Animal()

animal.constructor.story() //

class Rabbit extends Animal {
  admin='Rasheder child'
  constructor(){
    super()
    this.name = 'rabbit'
  }
  saidChild(){
    console.log('i m from prototype of rabbit')
  }
  static child(){
    console.log('I m a static child of rabbit')
  }
}

let rabbit = new Rabbit()

console.log({Animal, animal , Rabbit , rabbit});

Rabbit.story()



class CoffeMachine {
  #waterAmount = 0
  #power = 0
  
  constructor(amount,power){
    this.#waterAmount = amount
    this.#power = power
  }

  set waterAmount(value){
    console.log('Setter called')
    if(value<0) this.#waterAmount=0
    this.#waterAmount=value
  }


  get waterAmount(){
    return this.#waterAmount
  }
  get power(){
    return this.#power
  }

}

let coffeMachine =  new CoffeMachine(100,200);

let amount = coffeMachine.waterAmount
console.log(amount)

console.log({coffeMachine})

let arr = [] ;
