import { Beverage } from './Beverage';

class Decaf extends Beverage {
    price: number = 1;

    constructor() {
        super();
        this.description = 'Decaf';
    }

    cost(): number {
        return this.price;
    }
}

export { Decaf };
