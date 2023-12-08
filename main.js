function greet(fart){
    const greetPromise = new Promise(function(resolve,reject){
        resolve(`Hello ${fart}`)
    })
    return greetPromise
}
const olg = greet('oleg')
console.log(olg)
olg.then((result)=>{
    console.log(result)
})