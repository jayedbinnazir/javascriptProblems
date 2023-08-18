console.log('async')
//By async keyword we said that the function returns a promise
async function f(){
    //Returning value wraped automatically in a resolved() promise
    return 1 ;
    // or ,return Promise.resolve(1)
}

let promise = f();

console.log({promise})


async function f1(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>reject(new Error('Throws an error')),2000)
    })

   let result = await promise.then(null , (e)=> e.message) ; // makes result wait for promises to resolve and result will
                                // consume the promise result 
     
    console.log(result)
    return result
}

let promise1 =  f1()

console.log({promise1})

//Data fetching-->


async function req(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users') ;
    let data = await response.json() ;
    console.log(data)
    return data
}

let dataPromise = req();
console.log({dataPromise})

let URLS = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
]

async function reqest(){
    let responses = await Promise.all(URLS.map(url=>fetch(url)));
    let arrpromise = responses.map(response=>response.json())
    let data = await Promise.all(arrpromise) ;

    console.log(data)
    return data;
}

let parallelDataPromise = reqest()

console.log({parallelDataPromise})


