function greet(fart){
    const greetPromise = new Promise(function(resolve,reject){
        resolve(`Hello ${fart}`)
    })
    return greetPromise
}

const DOMSelectors = {
    h2: document.querySelectorAll('h2'),
    flexblacks: document.querySelector('#flexbox'),
    searchbar: document.querySelector('#search'),
    searchButton: document.querySelector('#submitter'),
}


//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO
function clearField(x){
    x.innerHTML = ''
}
DOMSelectors.searchButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks)
    let poop = `https://api.bestbuy.com/v1/products((search=${DOMSelectors.searchbar.value}))?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=image.asc&show=name,image&pageSize=15&page=10&format=json`
    async function getData(URL){
        try {
            let response = await fetch(URL);
            let fart = await response.json();
            fart.products.forEach((item)=>{
                DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h2>${item.name}</h2>`)
            })

        if(response.status != 200){
            throw new Error(response.statusText);
        }
            
        } catch (error) {
            DOMSelectors.h2.textContent = 'hi';
        }
  
}
getData(poop);
})



//POSTMAN(HTTP) + QUERY BUILDER