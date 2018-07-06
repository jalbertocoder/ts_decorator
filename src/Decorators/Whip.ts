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
        console.log('Whip cost ', this.price);
        console.log('This berverage with Whip cost ', this.beverage.cost() + this.price);
        return this.beverage.cost() + this.price;
    }

    getDescription(): void {
        console.log('This is the description of the Whip');
    }
}

export { Whip };
