console.log("Jayed") ;

let obj = {
   name:'Jayed',
   age:23 ,
   email:'Jayed@gmail.com',
   [Symbol.iterator](){
      let keys = Object.keys(this) ;
      let count = 0 ;
      return {
         next:()=>{
            if(count<=keys.length) {
            return { done:false , value:this[keys[count++]]  }
            } else {
               return {done:true , value:undefined}
            }
         }
      }
   }
}

for(let item of obj) {
   console.log(item)
}

let map = new Map([
   ['name', 'Jayed'],
   ['age',23]
])

for (let i of map){
   console.log('item',i)
}

let set = new Set(obj) ;
console.log(set)

const visitorsMap = new Map();

function trackVisitor(ipAddress) {
  if (visitorsMap.has(ipAddress)) {
    visitorsMap.set(ipAddress, visitorsMap.get(ipAddress) + 1);
  } else {
    visitorsMap.set(ipAddress, 1);
  }
}

trackVisitor('192.168.0.1');
trackVisitor('192.168.0.2');
trackVisitor('192.168.0.1');

console.log(visitorsMap);


let room = {
   number:23 ,
   toJSON(){
      console.log('to JSON is Called')
      return this
   }
}

let meetup = {
   title:'Conference' ,
   participants:[{name:'John'} ,  {name:'alice'}] ,
   place:room ,
}

room.occupiedBy = meetup ;


let format =  JSON.stringify(meetup , (key,value)=>{
   console.log(`${key}:${value}`);
   return (key == 'occupiedBy' ) ? undefined : value
},2);
console.log(format) ;

let room1 = {
   number:25 ,
   place:this ,
   toJSON(){
      return this
   }
}

console.log(JSON.stringify(room1, (key, value)=>{
   return (key == 'place') ? undefined : value
}))

let now = new Date(2011 , 3 , 1 , 3 , 2 , 30 , 700 ) ;
console.log(now)

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());

// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let john={
   name:'John',
   id:1
};

countUser(john);
countUser(john);
countUser(john);
console.log(visitsCountMap)

let cache = new WeakMap() ;

function Calculation(user){
   if(!cache.has(user)){
      console.log('new arrival')
      let result = user.id ;
      cache.set(user , result)
      return result
   } else {
      console.log('calling from cacheed')
      return cache.get(user)
   }

}
Calculation(john)

Calculation(john)


let counter = 0 ;


function printCount(){
   console.log(counter)
}

function nest(p){
   ++counter
   p()
} 
nest(printCount)

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  salary:[1,2,3,4,5],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
   if(Array.isArray(department)){
      return department.reduce((prev,current)=> prev+(current?.salary ? current.salary : 0 ),0)
   } else {
      let sum = 0 ;
      for( let subdep of Object.values(department) ){
         sum+= sumSalaries(subdep)
      }
      return sum ;
   }
}

let sumOfsalaries = sumSalaries(company) ;
console.log(sumOfsalaries)


function makeCounter(){

   function counter(){
      return counter.count++
   }

   counter.count = 0 ;
   return counter

}

let counter3 = makeCounter()
let counter4 = makeCounter()

console.log(counter3())
console.log(counter3())
console.log(counter3())
console.log(counter4())
console.log(counter4())

// let gUser = {} ;

// function upDtae(name){
//    gUser.name = name
// }


// function handler( data , ...handlers  ) {
//    let name = data() ;
//    if (!name) return
//    let admin = false ;
//    for(handler of handlers) {
//       if(handler.length==0){
//          admin = handler();
//       } else {
//          handler(name)
//          console.log(gUser)
//       }
//    }

// }

// handler( ()=>prompt('What is Your Name') ,()=>confirm('Are You a Admin?'), upDtae  )



// let timerId = setTimeout(function tick(){
//    console.log('tick')
//    let result = false
//    function changeResult(){
//        result = true
//        if(result){
//          console.log('called')
//          timerId = setTimeout(tick ,2000)
//          }
//    }
//    let timer = setTimeout(changeResult ,5000)
  
// },2000)

let sum = 0 ;
function logTick(){
   for(let i = 0 ; i<=100000000 ; i++ ){
      sum+=i
   }
   console.log(sum , 'times')
   return sum
}

console.log(sum)

 
let timer = setInterval(function tick(){

   logTick()
   
},1000)


clearInterval(timer)



function slow(x) {
   console.log('calling slow function with' ,x)
   return x
}

function caching(func){

   let map =  new Map();

   return function(x){

      if(map.has(x)) {
         console.log('returning from the cache')
         return map.get(x)
      }

      let result = func(x)

      map.set(x,result)

      return result

   }

}

slow = caching(slow) ;

slow(2)
slow(2)
slow(2)
slow(3)

let obj1 = {
   name:'jayed',
   someMethod(){
      console.log('some Method', this.name)
   }
}

let func = obj1.someMethod ;

func.call()

obj1.someMethod()

let str = 'Jayed Bin Nazir' ;
// console.log(str.split(' ').join('  '))


function arg(a,b,c){
   console.log(arguments)
   console.log(typeof arguments[Symbol.iterator])
   console.log(a+b+c)
   for(let args of arguments){
      console.log(args)
   }
   console.log([...arguments])
}

arg(1,2,3)


//Hashing Function

function hash(args){
   return [...args].join()
}
let cacheMap = new Map()
function add(a,b,c){
   let key = hash(arguments)
   let result = a+b+c
   cacheMap.set(key , result)
   return result
}

add(1,2,3)
console.log(cacheMap)


function props(){
   props.count = 5 ;
   console.log(props.count)
}
props()
let props1 = props ;
console.log(props.count)
console.log(props1.count)
props1.count = 7 ;
console.log(props.count)


