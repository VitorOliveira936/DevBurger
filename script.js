const ul = document.querySelector('ul');

let newLi = ''

function showAll() {

    newLi = ''

    mostrarTudo = menuOptions.forEach( products => {
        newLi += `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="price-text">R$${products.price.toFixed(2)}</p>
            </li>
        `
    })

    ul.innerHTML = newLi;
}

function showDesc() {
    newLi = ''

    desconts = menuOptions.map( products => {
        const desc = (products.price * 10) / 100
        const valDesc = products.price - desc
        return newLi += `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="price-text">R$${valDesc.toFixed(2)}</p>
            </li>
        `
    })

    ul.innerHTML = newLi
}

function showValTot() {
    newLi = ''

    valTot = menuOptions.reduce( ( acc, products ) => {
        return acc + products.price
         
    }, 0)
    

    ul.innerHTML = newLi += `
        <li>
            <p>O Valor total de todos os sandwiches do cardápio é:</p>
            <p class="price-text">R$${valTot.toFixed(2)}</p>
        </li>
    `
}

function sanVeg() {
    newLi = ''

    filterVeg = menuOptions.filter( products => {
        if ( products.vegan === true ) return newLi += `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="price-text">R$${products.price.toFixed(2)}</p>
            </li>
        `
        else false

        
    })

    ul.innerHTML = newLi
}
