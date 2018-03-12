class CheckingAccount{
    constructor(clientId,email,firstName,lastName){
        if(!/^[0-9]{6}$/.test(clientId)){
            throw new TypeError('Client ID must be a 6-digit number')
        }

        this.clientId=clientId;

        if(!/^[a-zA-Z0-9]+@[a-z0-9A-Z]+(.[a-zA-Z0-9]+)*$/.test(email)){
            throw  new TypeError('Invalid e-mail')
        }
        this.email=email;

        if(!/^[a-zA-Z]{3,20}$/.test(firstName)){
            if(firstName.length<3 || firstName.length>20){
                throw new TypeError("First name must be between 3 and 20 characters long")
            }
            throw new TypeError("First name must contain only Latin characters" )
        }

        this.firstName=firstName;

        if(!/^[a-zA-Z]{3,20}$/.test(lastName)){
            if(lastName.length<3 || lastName.length>20){
                throw new TypeError("Last name must be between 3 and 20 characters long")
            }
            throw new TypeError("Last name must contain only Latin characters" )
        }

        this.lastName=lastName;
    }
}

let acc = new CheckingAccount('423415', 'petkan@another.co.uk', 'Petkan', 'Draganov');