import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverages/Beverage';

class Whip extends CondimentDecorator {
    beverage: Beverage;
    price: number = 3;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost() + this.price;
    }

    getDescription(): string {
        return this.beverage.description + ' + Whip';
    }
}

export { Whip };
