const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
const FilterDesserts = document.querySelector('.Filter-desserts')

function formatCurrency(value) {
    const newValue = value.toLocaleString("en-US", 
    { style: "currency",
     currency: "USD",
    })

    return newValue
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi + `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>The Total Value Is ${formatCurrency(totalValue)}</p>
        </li>
        `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(filterJustVegan)
}

function filterAllItemsDesserts(){
    const filterJustDesserts = menuOptions.filter((product2) => product2.price < 30)

    showAll(filterJustDesserts)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
FilterDesserts.addEventListener('click', filterAllItemsDesserts)