const products = [
    {
        id: '1',
        name: 'Iphone6',
        img: 'phone.jpg',
        price:600,
        color: 'white',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '2',
        name: 'Iphone5',
        price: 600,
        img: 'phone.jpg',
        color: 'white',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '3',
        name: 'Iphone4',
        img: 'phone.jpg',
        price: 400,
        color: 'golden',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '4',
        name: 'Iphone6',
        img: 'phone.jpg',
        price: 300,
        color: 'gray',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '5',
        name: 'Iphone6',
        img: 'phone.jpg',
        price: 300,
        color: 'gray',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '6',
        name: 'Iphone6',
        img: 'phone.jpg',
        price: 300,
        color: 'gray',
        company: 'apple',
        description: 'lorem ipsum'
    },
    {
        id: '7',
        name: 'Iphone6',
        img: 'phone.jpg',
        price: 300,
        color: 'gray',
        company: 'apple',
        description: 'lorem ipsum'
    }
];

products.forEach((phone) => {
    document.getElementById('carte').insertAdjacentHTML('beforeend', `
        <div class="col-sm">
            <div class="card">
                <img src="img/iphone8.png" class="card-img-top" alt="iphone">
                <div class="card-body">
                    <h5 class="card-title">${phone.name}</h5>
                    <p class="card-text">Prix : ${phone.price}€TTC<br>
                    Couleur : ${phone.color}<br>
                    <span class="description">${phone.description}</span>
                    </p>               
                    <button type="button" id="${phone.id}" class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalScrollable">Ajouter au panier</button>
                </div>
            </div>
        </div>
        `);
});


let total = 0;

products.forEach((phone) => {
    document.getElementById(phone.id).addEventListener("click", (e) => {
        document.getElementById('panier').insertAdjacentHTML('beforeend', `
        <h5>${phone.name}</h5>
        <ul>
            <li>${phone.color}</li>
            <li>${phone.description}</li>
            <li id="prixPanier">${phone.price}€</li>
        </ul>        
        `);

        let totalPanier = total += phone.price;
        
        document.getElementById('total').innerHTML = `Total TTC = ${totalPanier} €`;
    })
});


