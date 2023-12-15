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
    moneyButton: document.querySelector('#money'),
    homer: document.querySelector('#homer')
}

const categoryPaths = {
    cellphones: 'pcmcat209400050001',
    desktops: 'abcat0501000',
    cameras: 'abcat0401000',
    health: 'pcmcat242800050021',
    headphones: 'abcat0204000',
    homeaudio: 'pcmcat241600050001',
    homeautomation: 'pcmcat254000050002',
    tablets: 'pcmcat209000050006',
    laptops: 'abcat0502000',
    ps4: 'pcmcat295700050012',
    speakers: 'pcmcat310200050004',
    stovetops: 'abcat0904000',
    refrigerators: 'abcat0901000',
    smallkitchen: 'abcat0912000',
    television: 'abcat0101000',
    washer: 'abcat0910000',
}
let counter = 1
let poopy = []
let money = 0

//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO

function clearField(x){
    x.innerHTML = ''
}
DOMSelectors.homer.addEventListener('click',function(e){
    e.preventDefault()
    clearField(DOMSelectors.flexblacks)
    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h2>hi guys</h2>`)
})

DOMSelectors.moneyButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks)
    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h1 id=main>MONEY</h1><button class=cookies id=moneymaker>click for moeny</button><h2 class=moneycounter>money = ${money}</h2>`)
    let moneyMakerButton = document.querySelector('#moneymaker')
    let moneycounter = document.querySelector('.moneycounter')
    moneyMakerButton.addEventListener('click',function(e){
        e.preventDefault();
        money = money + 1
        clearField(moneycounter)
        moneycounter.insertAdjacentHTML('beforeend',`money = ${money}`)
})
})

DOMSelectors.cartButton.addEventListener('click',function(e){
    e.preventDefault();
    counter = 1
    clearField(DOMSelectors.flexblacks);
    console.log(poopy.length)
    if(poopy.length != 0){
        poopy.forEach((item)=>{
            DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card>${counter}<h2>${item.name}, price is ${item.salePrice}<button id=buyButton class=butters>add to fart</button></h2></div>`)
            counter++
        })
    }else{
        DOMSelectors.flexblacks.insertAdjacentHTML('beforeend','<h2>you havent added anything to ur cart yet FATTY</h2>')
    }
    let buyerButton = document.querySelectorAll('#buyButton');
    buyerButton.forEach((btn)=>{
        btn.addEventListener('click',function(e){
            e.preventDefault();
            let farter = e.currentTarget.parentNode.parentNode
            farter = farter.textContent.charAt(0)
            if(poopy[farter-1].salePrice < money){
                poopy.splice(farter-1,1)
                counter=1
                clearField(DOMSelectors.flexblacks)
                poopy.forEach((item)=>{
                    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card>${counter}<h2>${item.name}, price is ${item.salePrice}<button id=buyButton class=butters>add to fart</button></h2></div>`)
                    counter++
                })
                money = money - poopy[farter-1].salePrice
                console.log(money)
            }else{
                alert('BROKIE',poopy)
                console.log(money)
            }
        })
    })
})



DOMSelectors.searchButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks)
    let poop = `https://api.bestbuy.com/v1/products((search=${DOMSelectors.searchbar.value}))?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name,image,salePrice&pageSize=100&format=json`
    async function getData(URL){
        try {
            let response = await fetch(URL);
            let fart = await response.json(); 
            fart.products.forEach((item)=>{
                DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card>${counter}<h2>${item.name}, price is ${item.salePrice}<button id=cartButton class=butters>add to fart</button></h2></div>`)
                counter++;
            })
            let carterButton = document.querySelectorAll('#cartButton')
            carterButton.forEach((btn)=>{
                btn.addEventListener('click',function(e){
                    e.preventDefault();
                    
                    let farter = e.currentTarget.parentNode.parentNode
                    farter = farter.textContent.charAt(0)
                    poopy.push(fart.products[farter-1])
                })
            })
            
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        } catch (error) {
            DOMSelectors.h2.textContent = (`Error Code ${response.status}, this is ${response.statusText}`);
        }
}
counter = 1
getData(poop);
})