console.log('promise');

//step-1 ,  Make a promise
//step-2 ,  Inside Promise promise fillup korar jnno kaaj --> producer code 
//step-3 ,  promise rakhar kaaj shesh hole outcome supply kore website e rakho-> 1) resolve(outcome) / reject(outcome)
//step-4 ,  jader k promise korechi(consumer-code) , tader k subscribe korte hbe amr 
            //website e .then(consumer function, consumer function).catch(same).finally(cleanUp function) diye


let promise = new Promise((resolve, reject)=>{
    //after 1sec the outCome generates
    setTimeout(()=>resolve(1), 1000)

}).then((r)=>{console.log(r); return r},(e)=>{console.log(e) ;  return e} ).finally(()=>console.log('I m cleanUp'))

console.log({promise})

//Another example-->
function add(a,b){
    return a+b ;
}
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let result = add(2,3)
        if(result){
            resolve(result)
        } else {
            reject(new Error('Result Not found'))
        }
    } , 1001)
})

console.log({promise1})

let newPromise = promise1.then((r)=>{
                    console.log(r);
                    //Actually we r wrapping the code with a new promise
                    //that promise resolve(returned) value
                    return r*2
                }).catch((e)=>{console.log(e.message); return e.message})
                                            .finally(()=>console.log('Finally i clean the meory'))
//new promise is returned by .then() call
console.log({newPromise})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       let result = add(50,20) ;
        if(result){
            resolve(result)
        } else {
            reject(new Error('Please Give a value to a function promise3'))
        }
    },1002)
}).then((r)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let processedresult = r*2
            resolve(processedresult)
        })
    })
})

console.log({promise3});

//Thenable--> 


class Thenable {
    constructor(number){
        this.number = number
    }

    then(resolve, reject){
        let result = this.number*5
        resolve(result)
    }
}

//lets create a constructor Function

function Nums(result){
    this.result = result ;
    this.then = (resolve, reject)=>{
        let result = this.result*5
        resolve(result)
    }
}

let promiseThenable = new Promise((resolve,reject)=>{
    resolve(5)
}).then((r)=>{
    // return new Nums(r)
    return new Thenable(r)  // Same result
})

console.log({promiseThenable})

//data Fetching

// fetch(url)

// This makes a network request to the url and returns a promise. 
// The promise resolves with a response object when the remote server responds with headers,
// but before the full response is downloade

let url = 'https://jsonplaceholder.typicode.com/users' ;

let getRequest = fetch(url)
//returns a promise , that is resolved with the response object ,
//when remote server respond with headers before downloading whole data

console.log({getRequest}) 

// let textDataPromise = getRequest.then(response=>response.text()) ; 
//response.text() convert the whole response object data into text  and resolve the promise with text data
// console.log({textDataPromise})

let arr = [ ] ;
function Datas(datas){
    let i = 0 ;
    for(let data of datas){
        console.log(`data${i++}:${data.name}`)
        arr.push(data)
    }
    return datas
}

let jsonDtaPromise = getRequest.then((r)=>{
    //it will convert the whole response data intu regular data object
    //and resolve with it
    return r.json()
}).then(Datas)

//Recieved all the data  bt there is a problem ,
// arr immidiately nor recieveing the data ;
//so this is not the way to keep the data
if(arr){
    console.log({arr})
}

console.log({jsonDtaPromise})

//Primise APis

// promise.all([iteerables]) // Promise.allSetteled([iterables]) 
// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// For instance, download several URLs in parallel and process the content once they are all done.

//-->Mechanism
//first it takes an iterable and returns a new Promise ,
//The promise resolves when all the promises are resolved in the array
//It waits for all promises to be resolved , and have the result in orderd way
// Promise.all([ eachPromiseresults | any result | direct value ])
//In the array it recieves only promise resuults, or any direct value, or retrned value from a function
//makes an array of value , then resolve it with array

// lets see an example

let arrData = [ 1,2, 'Jayed' , getRequest ,add(2,3)  ] ;
//Getrequest promise is allready resolved, it looks for the resolved promise results
let promiseAll = Promise.all(arrData) ;
console.log({promiseAll})

//Anotehr

let promiseAll1 = Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),3000)
    }) ,
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(2),1000)
    }) ,
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(3),2000)
    }) ,

]).then((result)=>{
    //result is an array 
    let sum = 0 ;
    for (let num of result){
        sum+=num
    }
    return sum
})

console.log({promiseAll1})


//Fetch Problems Now

let URLS = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
]

let requests = URLS.map(url=>fetch(url)) ;
console.log({requests}) //An array of fullFilled Promise , which has been storing all response object

//We kno that promise.all looks for only result of the resolved promises

let requestData = Promise.all(requests) ;
console.log({requestData}) ; //Promise Result is Array of 3 Response Object

let dataPromise = requestData.then((response)=>{
     
    //  return Promise.all(response.map(res=>res.json()))
     return response.map(res=>res.json())
})

console.log({dataPromise})

//Promise.allSettled([])

let URLS1 = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
]
let requests1 = URLS1.map((url)=>fetch(url))
let setteldPromise = Promise.allSettled(requests1).then(results=>{
   return Promise.all(results.map((state)=>{
    return state.value.json()
}))
}) ;

// Promise.allSettled here waits for all the promise to be settled first regardless of the result weather
//it is fulfilled or not
// It has Two state--> { status:fullfilled/Rejected , value:Resolved Value/ResPonse Object }

console.log({setteldPromise})

// Truthy or falsy -->

// Promise.race[Promises]--> It looks for first setteled(fullfilled/Error) 

//Promise.any[promises]--> It only looks for fullfilled Promises first,--> If all the promise r error
    // then it also aggreagate error

let winner = Promise.race([
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('Throws an error')),1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(3),3000)
    }),
])

console.log({winner})

let fullFilledFirst = Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),3000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('Throws an error')),1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(3),2000)
    }),
])

console.log({fullFilledFirst})

let aggreagatee = Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('----')),3000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('Throws an error')),1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error(';;;;;')),2000)
    }),
]).catch((e)=> e.errors.map(m=>m.message) )

console.log({aggreagatee})



