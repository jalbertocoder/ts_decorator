import { Beverage } from './Beverage';

class HouseBlend extends Beverage {
    price: number = 3;

    constructor() {
        super();
        this.description = 'HouseBlend';
    }

    cost(): number {
        return this.price;
    }
}

export { HouseBlend };
