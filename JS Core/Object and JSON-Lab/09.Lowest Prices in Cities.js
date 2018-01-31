function solve(input) {
    let products=new Map();

    for (let string of input) {
        let tokens=string.split(' | ');

        let town=tokens[0];
        let product=tokens[1];
        let price=Number(tokens[2]);

        if(!products.has(product)){
            products.set(product,new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product,towns] of products) {
        let minPrice=Number.MAX_VALUE;
        let minPriceTown='';

        for (let [town,price] of towns) {
            if(price<minPrice){
                minPrice=price;
                minPriceTown=town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])