import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverages/Beverage';

class Milk extends CondimentDecorator {
    price: number = 1;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost() + this.price;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ' + Milk';
    }
}

export { Milk };
