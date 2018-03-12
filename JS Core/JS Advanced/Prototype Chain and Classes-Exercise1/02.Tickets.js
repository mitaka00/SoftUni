function solve(arr,sortedString) {
    let tickets=[];
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    for (let line of arr) {
        let tokens=line.split('|');

        let destination=tokens[0];
        let price=Number(tokens[1]);
        let status=tokens[2];

        let ticket=new Ticket(destination,price,status);

        tickets.push(ticket);
    }

    if(sortedString==='price'){
        tickets=tickets.sort((x,y)=>x.price-y.price);
    }
    else {
        tickets=tickets.sort((x,y)=>x[sortedString].localeCompare(y[sortedString]));
    }

    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
));