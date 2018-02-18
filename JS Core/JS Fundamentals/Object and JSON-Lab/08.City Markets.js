function solve(input) {
    let productsInTowns={};

    for (let string of input) {
        let tokens=string.split(' -> ');
        let quantityAndPrice=tokens[2].split(' : ');

        let town=tokens[0];
        let product=tokens[1];
        let quantity=Number(quantityAndPrice[0]);
        let price=Number(quantityAndPrice[1]);

        if(!productsInTowns.hasOwnProperty(town)){
            productsInTowns[town]={};
        }

        if(!productsInTowns[town].hasOwnProperty(product)){
            productsInTowns[town][product]=0;
        }

        productsInTowns[town][product]+=quantity*price;
    }

    for (let town in productsInTowns) {
        console.log(`Town - ${town}`);
        for (let product in productsInTowns[town]) {
            console.log(`$$$${product} : ${productsInTowns[town][product]}`)
        }
    }
}