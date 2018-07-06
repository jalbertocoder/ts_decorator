import { Beverage } from './Beverage';

class DarkRoast extends Beverage {
    price: number = 4;

    constructor() {
        super();
        this.description = 'DarkRoast';
    }

    cost(): number {
        return this.price;
    }
}

export { DarkRoast };
