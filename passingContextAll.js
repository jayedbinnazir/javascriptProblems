console.log('Passing context') ;


// This --> 

let user = {
    name:'Jayed' ,
    sayHi(a){
        console.log(`Hello , ${a} ${this.name}`)
    }
}

user.sayHi('Hi') ; 

user.sayBye = function(a){
    console.log(`Bye , ${a} ${this.name}`)
}

user.sayBye('Bye') ;
//Loss this
// Eeverthing is allright , bt when we pass the reference of the method as a call back or to a variabvble
// we will loss the context(this)

//Let's se how it happens and how we cann solve this .

// call(context , ...arguments) ; apply(context, arguments(arrayLike object)) ; bind(context) ;

//1.Call(Context , arguments)

let sayHi = user.sayHi ;

sayHi('Hi') //  Hello , Hi undefined 

// sayHi loss The context 

sayHi.call(user , 'Hi' ) // Hello , Hi Jayed --> Now it;s ok 

// This is called forwarding call --> passsing the call with context and all arguments 

//Now lets see an example of passing as an callback

function callbackUser(f, g) {
    console.log('calling from the callBackUser')
    f('Hi') ; 
    g('Bye')
    //The prev call will print uundefined as the losing this 
    f.call(user , 'Hi')
    g.call(user , 'Bye')
}

callbackUser(user.sayHi, user.sayBye)


//Using a wrapper function 

function wrapper(f , g){
    return function(a,b){
        console.log('calling from wrapper')
        f(a) 
        g(b)
        console.log('solved in wrapper')
        f.call(user , a)
        g.call(user ,b )
        
    }
}

let hiBye = wrapper(user.sayHi , user.sayBye);

hiBye('Hi','Bye') //Not Working 

//2 ways to solve --> solve in wrapper(we solved it already) and solve out of wrapper 

// Solved Out of wrapper 
console.log('solved out of the wrapper is a wrong solution')
///////////////////////
hiBye.call(user ,'Hi' , 'Bye' ) // eventually this solution is wrong  , we should apply the contxt to the reference 
                                    //of the main function
///////////////////////////////////////////////////////////

// Way number 3 --> This is the original wrapper ssolution
// Mainly we make the solution with bind() method instead of wrapping .
//bt, in bind method , it will fixed the context forever .we dn't need to pass a context agin and again

let user2= {
    name:'Jayed',
    sayHi(){
        console.log(`hello another wrapper solution ${this.name}`)
    }
}

function sayHii(){
    //It will recieve the context from outer lexical environment
    user2.sayHi()
}

function anotherWrapper( sayHi ){
    console.log('original wrapping solution')
    sayHi()
}

anotherWrapper(sayHii)

//func.apply 

// When Multiple arbitrary number of arguments is available in a wrapper function 

let admin = {
    name:'Jayed' ,
    say(l , e  , d){
        console.log(`I learn ${l}  and i'm ${e} and now i want to ${d}`)
    }
}

function wrappMethod(method){
    return function(l,e,d) {
        console.log('Calling from wrapped Method')
        method.call(admin , ...arguments )
    }
}   

admin.say = wrappMethod(admin.say) ; // this Wrapped method provides functionality to an original function call also

admin.say('Javascript' ,' happy' , 'dance' )

// Now we don't want to spread ...arguments .
//here func.apply comes in handy , it acpts arralike arguments

function anotherWrappedMethod(methods){
    return function(l,e,d) {
        console.log('Calling from another Wrapped Method')
        methods.apply(admin , arguments)
    }
}

let say = anotherWrappedMethod(admin.say) ;

say('Javascript' , 'Happy' , 'Dance' )

//Observation--> We change the main function with functionalty with wrappMethod() firstly ,
// then we provide more functionality to that changeedFunction with anotherWrappedMethod function
// By this way we can provide more functionality to a single function seperately
//THats why callung to a say( ) provides previous functionality also . line 94 nprinted before line 108

// Bind Method --> This will fixedly bind the function to it's context

//Bind Section-->


let user3={
    firstName:'bruce' ,
    said(){
        console.log(`Hello ${this.firstName}`)
    }
}

function said(){
    user3.said()
}

function saidWrapper(said){
    console.log('Said Wrapper called')
    said()
}

saidWrapper(said)

user3 ={
    firstName:'Wwayne',
    said(){
        console.log(`another User ${this.firstName}`)
    }
}

saidWrapper(said) // The object changed so the output is also changed 

//But we want the previous object to be fiexd for the call of said() inside the siadWrapper .
//How to achieve that 

let user4 = {
    firstName:'Junayed',
    tell(){
        console.log(`user 4 is ${this.firstName}`)
    }
}
let tell = user4.tell.bind(user4)

function wrapJunu(tell){
    console.log('call from wrapJunu')
    tell()
}
 user4 = {
    firstName:'Jarin',
    tell(){
        console.log(`user 4 is ${this.firstName}`)
    }
}
wrapJunu(tell) // it will print Junayed even if we change the object method , and change our mind . 
 // actually we are creating different method binding our particular object, that can never be changed somewhere else
 //If we want to track the change  , we need to declare another method with the bind 


 //More example from the info 

 let user5={
    name:'Jayed',
    telling(){
        console.log(`You are telling ${this.name}`)
    }
 }
//Actuall we r doing this 
// f = user5.telling
//setTimeout(f , 1000)
//losing the reference
 setTimeout(user5.telling , 1000) // solution not graunted bcz we r passing as callback , the ref is lost 

 // Solution is nested calling , that will find user5 from the outer lexical environment

 setTimeout(()=>user5.telling() , 1000) // Works fine

 //but here is the cache!! if we cahnge our object before invoking the method , means change before 1second
 //then it will refer to the wrong object

 // example -->

 let user6 = {
    name:'Jarin',
    teller(){
        console.log(`User 6  is ${this.name}`)
    }
 }

 setTimeout(()=>user6.teller() , 1000) ; // Print the changed value, bt we dn't want this

 user6 = {
    name:'changed Name',
    teller(){
        console.log(`User 6 ${this.name}`)
    }
 }

 //we want the code before change the object , should use it's previous method .

 // use the bind here .

 let teller = user6.teller.bind(user6) ;
 setTimeout(teller , 3000) 

 //If we change the object again , 
 user6={
    name:'Agin Changed',
    teller(){
        console.log(`user6 is ${this.name}`)
    }
 }

 //But nothing will change for the previous teller() ,
 // If we need change then we can create another bind function after the change seperately


let user7 = {
    name:'Efat' ,
    efatSaid(){
        console.log(`user 7  is ${this.name}`)
    }
}

user7.efatSaid = user7.efatSaid.bind(user7) ;

setTimeout(user7.efatSaid,3000) ; // works as intended

setTimeout(()=>user7.efatSaid(),3000) ; // Bt, if we invoke it in wrapper , it will have the regular behaviour
// it will cause The regular behaviour with changing in user7 .
user7 = {
    name:'Efat Changed' ,
    efatSaid(){
        console.log(`user 7  is ${this.name}`)
    }
}

// it will always have the context while passing the method--> this is the benifite

// We can bind The all method of the object with it's context  for 
//always having the reference bt the behavoir is regular --> bcz we r binding the method itself context
// Not declaring bind by passing it to another variable .
// Changing the object will cause the change in the method .
// We r doing this jst for having the context always while passing

let user8 = {
    fName:'Juunayed',
    lName:'Jayed',
    sayHi(){
        console.log(`Hello ${this.fName}`)
    },
    sayBye(){
        console.log(`Bye ${this.lName}`)
    },

    add(a,b){
        console.log(a+b)

    }
}

for (let key in user8) {
    if(typeof user8[key]=='function'){
        user8[key]= user8[key].bind(user8)
    }
}

// Now we can use the all method without passing the context seperately , 
//they wiil alaways have 'This' 

//Let's try 

setTimeout(()=>user8.add(2,4),4000) // Work with parameter we need the wrapper, that will cause regular behaviour
                                    // While changing the object, so don't use it thinking special behaviour when You want to pass an arguments
                                    // To the metthod , Think to have the context only . 
                                    //And You dn't need The contexxtnto be bind when you don't
                                    //provide any 'this.props' to the method
setTimeout(user8.sayBye, 5000)
                                    user8 = {
                                        add(a,b) {
                                            console.log(a*b)
                                        }
                                    }
setTimeout(user8.sayHi,5500)// it will not found the sayhi, bcz the object nis changed



//Writing Partial Funtion By binding arguments-->
// The full syntex

// let bound = func.bind(context, [arg1], [arg2], ...);
// It allows to bind context as this and starting arguments of the function.

function mul (a,b){
    console.log('Multiplying' , a*b)
}

// Let’s use bind to create a function double on its base:

let double = mul.bind(null ,2 ) ;

double(3);

function triple(a,b){
    console.log(a*b)
}

triple = triple.bind(null, 3) ;
triple(4)

// The call to mul.bind(null, 2) ---->creates a new function<---- double that passes calls to mul, 
//  fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.

// Why do we usually make a partial function?

// The benefit is that we can create an independent function with a readable name (double, triple). 
// We can use it and not provide the first argument every time as it’s fixed with bind.

// In other cases, partial application is useful when we have a very generic function and
// want a less universal variant of it for convenience.

// For instance, we have a function send(from, to, text). Then,
// inside a user object we may want to use a partial variant of it: sendTo(to, text) that sends from the current user.
 

// ---- > 
// We may also can do this with func.call() 
//by creatting partial function 

function add(a,b,c){
    console.log('Adding Ten',a+b+c)
}

function partial(func , ...boudary) {
    return function(...args){
        func.call(null ,...boudary , ...args   )
    }
}

let add10 = partial(add , 10 )

add10(2,3)



// Going Partial Without Context --->


// What if we’d like to fix some arguments, but not the context this? For example, for an object method.

// The native bind does not allow that. We can’t just omit the context and jump to arguments.



let user9={
    name:'Zubayer',
    saidso(a,b){
        console.log(`${a} ${this.name} ${b}`)
    }
}

user9.saidso = user9.saidso.bind( this , 'hello' ); //Not allowed to not setting the fixed context

user9.saidso('bro')

// Fortunately, a function partial for binding only arguments can be easily implemented.

// Fortunately, a function partial for binding only arguments can be easily implemented.

// Like this:

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user10 = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method with fixed time
user10.sayNow = partial(user10.say, new Date().getHours() + ':' + new Date().getMinutes());

user10.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

let user11={
    firstName:'Nishat Nayla Nimmi'
}

user11.sayNow = partial(user10.say , new Date().getHours()+ ':'+ new Date().getMinutes() ) ;

user11.sayNow('Hello') ;

//The context is not fixed Now :) 