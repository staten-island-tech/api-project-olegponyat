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
const url = 'http://api.weatherstack.com?access_key=555fa2b7cc20e60f56e8d6e6ec96fe75';

async function getData(URL){
    try {
        const response = await fetch(URL)
        console.log(response);
    } catch (error) {
        
    }
}