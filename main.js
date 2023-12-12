function greet(fart){
    const greetPromise = new Promise(function(resolve,reject){
        resolve(`Hello ${fart}`)
    })
    return greetPromise
}


const URL = 'https://api.bestbuy.com/v1/products/8880044.json?show=name,&apiKey=4oAIRKlbsIUvAP0gG5SNNcoO'
async function getData(URL){
    try {
        const response = await fetch(URL)
        console.log(response);
    } catch (error) {
        
    }
}

//POSTMAN(HTTP) + QUERY BUILDER