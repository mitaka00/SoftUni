class PaymentProcessor {
    constructor(object) {
        if (object === undefined) {
            this.types = ["service", "product", "other"];
            this.precision = 2;
        } else {
            if (object.hasOwnProperty('types')) {
                this.types = object.types;
            } else {
                this.types = ["service", "product", "other"];
            }

            if (object.hasOwnProperty('precision')) {
                this.precision = object.precision;
            } else {
                this.precision = 2;
            }
        }

        this.payments = [];
        this.balance = 0;
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== 'string' || id.length === 0 || typeof name !== 'string' || name.length === 0 || typeof value !== 'number' || !(this['types'].includes(type))) {
            throw new Error('register');
        } else {
            for (let payment of this.payments) {
                if (payment.id === id) {
                    throw new Error('already have id');
                }
            }

            value = Number(value.toFixed(this.precision));

            this.payments.push({id, name, type, value});
            this.balance += value;

            return this;
        }
    }

    deletePayment(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id === id) {
                this.balance -= this.payments[i].value;
                this.payments.splice(i, 1);
                return this;
            }
        }
        throw new Error('fake id in delete function');
    }

    get(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id === id) {
                return `Details about payment ID: ${id}\n- Name: ${this.payments[i].name}\n- Type: ${this.payments[i].type}\n- Value: ${this.payments[i].value.toFixed(this.precision)}`
            }
        }
        throw new Error('fake id in get function');
    }
    setOptions(options){
        if(options.hasOwnProperty('types')){
            this.types=options.types;
        } else {
            this.types=["service", "product", "other"];
        }

        if(options.hasOwnProperty('precision')){
            this.precision=options.precision;
        } else {
            this.precision=2;
        }

        return this
    }
    toString(){
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${this.balance.toFixed(this.precision)}`
    }
}

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());








