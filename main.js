function greet(fart){
    const greetPromise = new Promise(function(resolve,reject){
        resolve(`Hello ${fart}`)
    })
    return greetPromise
}

const DOMSelectors = {
    h2: document.querySelectorAll('h2'),
    flexblacks: document.querySelector('#flexbox'),
}
//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO
const poop = 'https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209400050001))?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name&format=json'
console.log(poop)
async function getData(URL){
    try {
        const response = await fetch(URL);
        const fart = await response.json();
        console.log(fart)
        fart.products.forEach((poopy)=>{
            DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h2>${poopy.name}</h2>`)
        })
    if(response.status != 200){
        throw new Error(response.statusText);
    }
        
    } catch (error) {
        DOMSelectors.h2.textContent = 'hi';
    }
  
}
getData(poop);

//POSTMAN(HTTP) + QUERY BUILDER