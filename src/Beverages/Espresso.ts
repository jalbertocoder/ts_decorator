import { Beverage } from './Beverage';

class Espresso extends Beverage {
    price: number = 2;

    constructor() {
        super();
        this.description = 'Espresso';
    }

    cost(): number {
        return this.price;
    }
}

export { Espresso };
