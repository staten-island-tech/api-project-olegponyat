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
    moners: document.querySelector('#moners'),
    cardinject: document.querySelector('#card-inject')
}

let counter = 1
let poopy = []
let factory = []
let money = 100
let checkedCount = 0;
const maxAllowed = 1;
let categoryID = ''

//?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO

function clearField(){
    DOMSelectors.flexblacks.innerHTML = '';
    DOMSelectors.moners.innerHTML = '';
    DOMSelectors.cardinject.innerHTML = '';
}
function clearFieldSpec(x){
    x.innerHTML = ''
}
DOMSelectors.dropdownCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',function(e){
        if(checkbox.checked === true){
            let text = e.currentTarget.parentNode.textContent
            if(text === 'Cell Phones'){
                categoryID = '&(categoryPath.id=pcmcat209400050001)'
            }else if(text === 'Desktops'){
                categoryID = '&(categoryPath.id=abcat0501000)'
            }else if(text === 'Cameras'){
                categoryID = '&(categoryPath.id=abcat0401000)'
            }else if(text === 'Health'){
                categoryID = '&(categoryPath.id=pcmcat242800050021)'
            }else if(text === 'Headphones'){
                categoryID = '&(categoryPath.id=abcat0204000)'
            }else if(text === 'Tablets'){
                categoryID = '&(categoryPath.id=pcmcat209000050006)'
            }else if(text === 'Laptops'){
                categoryID = '&(categoryPath.id=abcat0502000)'
            }else if(text === 'Speakers'){
                categoryID = '&(categoryPath.id=pcmcat310200050004)'
            }else if(text === 'Refrigerators'){
                categoryID = '&(categoryPath.id=abcat0901000)'
            }else if(text === 'Televisions'){
                categoryID = '&(categoryPath.id=abcat0101000)'
            }
        }else if(checkbox.checked === false){
                categoryID = ''
        }
        if (this.checked) {
                checkedCount += 1;
                if (checkedCount > maxAllowed) {
                    this.checked = false;
                    checkedCount -= 1;
                }
            } else {
                checkedCount -= 1;
            
            
        }
    })
})
DOMSelectors.homer.addEventListener('click',function(e){
    e.preventDefault()
    clearField()
    function addParentheses(str) {
        return `(${str})`;
    }
    let newCategory
    if(categoryID === ''){
        console.log('jakey wakey eggs and bakey')
        newCategory = ''
    }else{
        newCategory = addParentheses(categoryID.replace('&',''))
    }
    let poop = `https://api.bestbuy.com/v1/products${newCategory}?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name,image,salePrice,sku&pageSize=100&format=json`
    console.log(poop)
    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`
    <h1>welcome to grdy (pronouced griddy, not girdy).</h1>
    <h2>here are some recommended products you can buy based on your selected category</h2>`)
    async function getData(URL){
        try {
            let response = await fetch(URL);
            console.log(response)
            let fart = await response.json();
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
            }
            let port = [];
            const maxIndex = fart.products.length;

            while (port.length < 4) {
                const randomIndex = getRandomInt(0, maxIndex);
            
                if (!port.includes(fart.products[randomIndex])) {
                    port.push(fart.products[randomIndex]);
                }
            }
            if(newCategory === ''){
                DOMSelectors.flexblacks.insertAdjacentHTML('beforeend','<h2 class=blanked>WASSAAAAAA</h2>')
            }else{
                port.forEach((item)=>{
                    DOMSelectors.flexblacks.insertAdjacentHTML('beforeend',`<div class="product-card">
                    <h6 class=poop>${counter}</h6>
                    <div class="product-details">
                        <div class="product-info">
                            <div class=product-thumbnail>
                                <img src=${item.image} alt=(${item.name}) class=thumbnail>
                            </div>
                            <div class=product-basic>
                                <h3 class=product-title>${item.name}</h3>
                                <h5 class="product-sku">SKU: ${item.sku}</h5>
                            </div>
                        </div>
                        <div class="product-actions">
                            <span class="product-price">$${item.salePrice}</span>
                            <button class=btn>Buy Now</button>
                        </div>
                    </div>
                </div>`)
                })
            }
            
        if(response.status != 200){

        }
        } catch (error) {
            DOMSelectors.flexblacks.textContent = (`Error Code ${response.status}, `);

        }
}
counter = 1
getData(poop);
})
let intervalId
DOMSelectors.moneyButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField()
    console.log(factory)
    DOMSelectors.moners.insertAdjacentHTML('beforeend',`<div class=moneyfart><h1 id=main>MONEY</h1><button class=cookies id=moneymaker>click for moeny</button><h2 class=moneycounter>money = ${money}</h2></div>`)
    let moneyMakerButton = document.querySelector('#moneymaker')
    let moneycounter = document.querySelector('.moneycounter')
    moneyMakerButton.addEventListener('click',function(e){
        e.preventDefault();
        money = money + 1
        moneycounter.textContent = 'money = ' + money
    })
    if(factory.length != 0){
        factory.forEach((item)=>{
            function startCounting() {
                intervalId = setInterval(() => {
                    money = money + Math.round((item.salePrice/20))
                    moneycounter.textContent = `money = ${money}`
                }, 1000);
            }
            clearInterval(intervalId);
            startCounting(); 
            DOMSelectors.cardinject.insertAdjacentHTML('beforeend',`
            <div class="factory-card">
                <h6>${counter}</h6>
                <div class="product-details">
                    <div class="product-info">
                        <div class=product-thumbnail>
                            <img src=fafafa.png alt=image of ${item.name} id=factories>
                        </div>
                        <div class=product-basic>
                            <h3 class=product-title>${item.name}</h3>
                            <h5 class="product-sku">SKU: ${item.sku}</h5>
                            <h2>paid $${item.salePrice}</h2>
                            <h2>currently adding: $${Math.round(item.salePrice)/20} per second
                        </div>
                    </div>
                </div>
            </div>`)

        })
    }else{
        DOMSelectors.cardinject.insertAdjacentHTML('beforeend',`<h2 class=blanked>you havent bought any products yet FATTY</h2>`)
    }
})

DOMSelectors.cartButton.addEventListener('click',function(e){
    e.preventDefault();
    counter = 1
    clearField();
    console.log(poopy)
    if(poopy.length != 0){
        poopy.forEach((item)=>{
            DOMSelectors.cardinject.insertAdjacentHTML('beforeend',`<div class="product-card">
                <h6 class=poop>${counter}</h6>
                <div class="product-details">
                    <div class="product-info">
                        <div class=product-thumbnail>
                            <img src=${item.image} alt=image of ${item.name} class=thumbnail>
                        </div>
                        <div class=product-basic>
                            <h3 class=product-title>${item.name}</h3>
                            <h5 class="product-sku">SKU: ${item.sku}</h5>
                        </div>
                    </div>
                    <div class="product-actions">
                        <span class="product-price">$${item.salePrice}</span>
                        <button class=btn>Buy Now</button>
                    </div>
                </div>
            </div>`)
            counter++
        })
        let checkout = 0
        poopy.forEach((poop)=>{
            checkout = Math.round(checkout + poop.salePrice)
        })
        DOMSelectors.moners.insertAdjacentHTML('beforeend',`<h2>Checkout All: ${checkout}</h2><button id=checkout-btn>Buy All</button>`)
    }else{
        DOMSelectors.flexblacks.insertAdjacentHTML('beforeend','<h2 class=blanked>you havent added anything to ur cart yet FATTY</h2>')
    }
    let buyerButton = document.querySelectorAll('.btn');

    buyerButton.forEach((btn)=>{
        btn.addEventListener('click',function(e){
            e.preventDefault();
            let farter = e.currentTarget.parentNode.parentNode.parentNode
            let pooper = farter.querySelector('h6')
            pooper = pooper.textContent
            counter=1
            const card = btn.closest('.product-card'); // Find the closest card element
            console.log(card)
            if(poopy[pooper-1].salePrice <= money){
                poopy.splice(pooper-1,1)
                
                card.remove()
                /* clearField()
                poopy.forEach((item)=>{
                    DOMSelectors.cardinject.insertAdjacentHTML('beforeend',`<div class="product-card">
                    <h6 class=poop>${counter}</h6>
                    <div class="product-details">
                        <div class="product-info">
                            <div class=product-thumbnail>
                                <img src=${item.image} alt=bortnite class=thumbnail>
                            </div>
                            <div class=product-basic>
                                <h3 class=product-title>${item.name}</h3>
                                <h5 class="product-sku">SKU: ${item.sku}</h5>
                            </div>
                        </div>
                        <div class="product-actions">
                            <span class="product-price">$${item.salePrice}</span>
                            <button class=btn>Buy Now</button>
                        </div>
                    </div>
                    </div>`)
                    counter++
                }) */
                money = Math.round(money - poopy[pooper-1].salePrice)
                factory.push(poopy[pooper-1])
                let checkoutFinal = document.querySelector('.checkout-btn')
                
            }else{
                console.log('BROKIE',money,poopy[pooper-1].salePrice)
            }
        })
    })
})

DOMSelectors.searchButton.addEventListener('click',function(e){
    e.preventDefault();
    clearField()
    function formatAsQueryParam(input) {
        const wordsArray = input.trim().split(/\s+/);
        
        if (wordsArray.length > 1) {
            const formattedWords = wordsArray.map(word => `search=${word}`).join('&');
            return `(${formattedWords})`;
        } else {
            return `(search=${input})`;
        }
    }
    const formattedQuery = formatAsQueryParam(DOMSelectors.searchbar.value);
    
    let poop = `https://api.bestbuy.com/v1/products(${formattedQuery}${categoryID})?apiKey=4oAIRKlbsIUvAP0gG5SNNcoO&sort=name.asc&show=name,image,salePrice,sku&pageSize=100&format=json`
    async function getData(URL){
        try {
            const response = await fetch(URL);
            const fart = await response.json();
            console.log(poop)
            function getTotalElements() {
                const container = document.getElementById('card-inject');
              
                if (container) {
                  const childNodes = container.childNodes;
                  const elementNodes = Array.from(childNodes).filter(node => node.nodeType === 1);
                  return elementNodes.length;
                } else {
                  return -1;
                }
            }
            fart.products.forEach((item)=>{
                DOMSelectors.cardinject.insertAdjacentHTML('beforeend',`
                    <div class="product-card">
                        <h6>${counter}</h6>
                        <div class="product-details">
                            <div class="product-info">
                                <div class=product-thumbnail>
                                    <img src=${item.image} alt=image of ${item.name} class=thumbnail>
                                </div>
                                <div class=product-basic>
                                    <h3 class=product-title>${item.name}</h3>
                                    <h5 class="product-sku">SKU: ${item.sku}</h5>
                                </div>
                            </div>
                            <div class="product-actions">
                                <span class="product-price">$${item.salePrice}</span>
                                <button class=btn>Add to Cart</button>

                            </div>
                        </div>
                    </div>`)
                counter++;
            })
            
            const total = getTotalElements();
            if(total != 0){
                DOMSelectors.cardinject.insertAdjacentHTML('afterbegin',`<div class=total-items>${total} items</div>`)
            }else{
                DOMSelectors.cardinject.insertAdjacentHTML('afterbegin',`<div class=blanked>no items found fatty</div>`)
            }
            
            let carterButton = document.querySelectorAll('.btn')
            console.log(carterButton)
            carterButton.forEach((btn)=>{
                btn.addEventListener('click',function(e){
                    e.preventDefault();
                    let farter = e.currentTarget.parentNode.parentNode.parentNode
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
            DOMSelectors.flexblacks.textContent = `Error Code ${response}, this is ${response.statusText}`
        }
}
counter = 1
getData(poop);
})