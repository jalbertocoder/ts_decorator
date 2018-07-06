import { Beverage } from './Beverage';

class DarkRoast extends Beverage {
    price: number = 4;

    cost(): number {
        console.log('DarkRoast cost ', this.price);
        return this.price;
    }
}

export { DarkRoast };
