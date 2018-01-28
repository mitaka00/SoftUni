function solve(input){
    let usernames=[];

    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split('@');

        let name=tokens[0]+'.';

        let domains=tokens[1].split('.');

        for (let domain of domains) {
            name+=domain[0];
        }

        usernames.push(name)
    }

    console.log(usernames.join(', '))
}