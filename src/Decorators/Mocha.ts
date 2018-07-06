import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverages/Beverage';

class Mocha extends CondimentDecorator {
    beverage: Beverage;
    price: number = 2;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        console.log('Mocha cost ', this.price);
        console.log('This beverage with Mocha cost ', this.beverage.cost() + this.price);
        return this.beverage.cost() + this.price;
    }

    getDescription(): void {
        console.log('This is the description of the Mocha');
    }
}

export { Mocha };
