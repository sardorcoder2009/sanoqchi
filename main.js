const products = [
    { name: "Telefon", price: 45 },
    { name: "Kompyuter", price: 550 },
    { name: "Planshet", price: 120 },
    { name: "Naushnik", price: 20 },
    { name: "Televizor", price: 300 },
];

const container = document.querySelector('.product');
const Button = document.querySelector('.btn');

function display(items) {
    container.innerHTML = '';
    items.forEach(pr => {
        const div = document.createElement('div');
        div.className = 'product1';
        div.innerHTML = `<h3>${pr.name}</h3><br> $${pr.price}`;
        container.appendChild(div);
    });
}

display(products);

Button.addEventListener('click', () => {
    const edProducts = products.filter(product => product.price > 50);
    display(edProducts);
});
