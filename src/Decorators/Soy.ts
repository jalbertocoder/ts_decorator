import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../Beverages/Beverage';

class Soy extends CondimentDecorator {
    beverage: Beverage;
    price: number = 1;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        console.log('Soy cost ', this.price);
        console.log('This beverage with Soy cost ', this.beverage.cost() + this.price);
        return this.beverage.cost() + this.price;
    }

    getDescription(): void {
        console.log('This is the description of the Soy');
    }
}

export { Soy };
