function greet(fart){
    const greetPromise = new Promise(function(resolve,reject){
        resolve(`Hello ${fart}`)
    })
    return greetPromise
}

const DOMSelectors = {
    h2: document.querySelectorAll('h2'),
    flexblacks: document.querySelector('#flexbox'),
    searchbar: document.querySelector('.search'),
    searchButton: document.querySelector('.submitter'),
    cartButton: document.querySelector('#cart'),
}
console.log(DOMSelectors.cartButton)
const categoryPaths = {
    
}

//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO
function clearField(x){
    x.innerHTML = ''
}
DOMSelectors.cartButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks);

})
DOMSelectors.searchButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks)
    let poop = `https://api.bestbuy.com/v1/products((search=${DOMSelectors.searchbar.value}))?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name&pageSize=100&format=json`
    console.log(poop)
    async function getData(URL){
        try {
            let response = await fetch(URL);
            let fart = await response.json();
            fart.products.forEach((item)=>{
                DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h2>${item.name}</h2><button class=cartButton>add to cart</button>`)
            })
            let carterButton = document.querySelectorAll('.cartButton')
            console.log(carterButton)

        if(response.status != 200){
            throw new Error(response.statusText);
        }
            
        } catch (error) {
            DOMSelectors.h2.textContent = 'hi';
        }
  
}
getData(poop);
})