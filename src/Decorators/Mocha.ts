import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverages/Beverage';

class Mocha extends CondimentDecorator {
    price: number = 2;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost() + this.price;
    }

    getDescription(): string {
        return this.beverage.description + ' + Mocha';
    }
}

export { Mocha };
