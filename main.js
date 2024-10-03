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
    homer: document.querySelector('#homer'),
    dropdownCheckboxes: document.querySelectorAll('.checkersbockers'),
}
console.log(DOMSelectors.dropdownCheckboxes)


const categoryPaths = {
    cellphones: '0pcmcat209400050001',
    desktops: '1abcat0501000',
    cameras: '2abcat0401000',
    health: '3pcmcat242800050021',
    headphones: '4abcat0204000',
    tablets: '5pcmcat209000050006',
    laptops: '6abcat0502000',
    speakers: '7pcmcat310200050004',
    refrigerators: '8abcat0901000',
    television: '9abcat0101000',
}
let counter = 1
let counter2 = 1
let poopy = []
let money = 20
let checkedCount = 0;
const maxAllowed = 1;
let categoryID

//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO



function clearField(x){
    x.innerHTML = ''
}

DOMSelectors.homer.addEventListener('click',function(e){
    e.preventDefault()
    clearField(DOMSelectors.flexblacks)
    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<h1>hi guys</h1>`)
})
DOMSelectors.dropdownCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',function(e){
        if (this.checked) {
                checkedCount += 1;
                if (checkedCount > maxAllowed) {
                    this.checked = false;
                    checkedCount -= 1;
                }
            } else {
                checkedCount -= 1;
            }
        DOMSelectors.dropdownCheckboxes.forEach((checkbox)=>{
            if(checkbox.checked === true){
                let text = e.currentTarget.parentNode.textContent
                if(text === 'Cell Phones'){
                    categoryID = 'pcmcat209400050001'
                }else if(checkbox.checked === false){
                    categoryID
                }
            }

        })
    })
})
DOMSelectors.cartButton.addEventListener('click',function(e){
    e.preventDefault();
    counter = 1
    clearField(DOMSelectors.flexblacks);
    console.log(poopy.length)
    console.log(poopy)
    if(poopy.length != 0){
        poopy.forEach((item)=>{
            DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card><h6>${counter}</h6><h2>${item.name}, price is ${item.salePrice}<button id=buyButton class=butters>buy and make factory</button></h2></div>`)
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
            let pooper = farter.querySelector('h6')
            pooper = pooper.textContent
            if(poopy[pooper-1].salePrice <= money){
                poopy.splice(pooper-1,1)
                counter=1
                clearField(DOMSelectors.flexblacks)
                poopy.forEach((item)=>{
                    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card><h6>${counter}</h6><h2>${item.name}, price is ${item.salePrice}<button id=buyButton class=butters>buy and make factory</button></h2></div>`)
                    counter++
                })
                money = Math.round(money - poopy[pooper-1].salePrice)
                console.log(money)
            }else{
                console.log('BROKIE',money,poopy[pooper-1].salePrice)
            }
        })
    })
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
DOMSelectors.searchButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField(DOMSelectors.flexblacks)
    let poop = `https://api.bestbuy.com/v1/products((search=${DOMSelectors.searchbar.value})&(categoryPath.id=${categoryID}))?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name,image,salePrice&pageSize=100&format=json`
    async function getData(URL){
        try {
            let response = await fetch(URL);
            let fart = await response.json();
            fart.products.forEach((item)=>{
                DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class=card><h6>${counter}</h6><h2>${item.name}, price is ${item.salePrice}<button id=cartButton class=butters>add to cart</button></h2></div>`)
                counter++;
            })
            let carterButton = document.querySelectorAll('#cartButton')
            carterButton.forEach((btn)=>{
                btn.addEventListener('click',function(e){
                    e.preventDefault();
                    let farter = e.currentTarget.parentNode.parentNode
                    let pooper = farter.querySelector('h6')
                    pooper = pooper.textContent
                    console.log(fart.products[pooper-1])
                    poopy.push(fart.products[pooper-1])
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