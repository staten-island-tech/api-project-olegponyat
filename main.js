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

var bby = require('bestbuy')('4oAIRKlbsIUvAP0gG5SNNcoO');
bby.categories('',{show:'id'}).then(function(data){
  console.log(data);
});
/* async function getData(URL){
    try {
        const response = await fetch(URL)
        console.log(response);
    } catch (error) {
        
    }
} */