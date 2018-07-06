import { Beverage } from './Beverage';

class Decaf extends Beverage {
    price: number = 1;

    cost(): number {
        console.log('Decaf cost ', this.price);
        return this.price;
    }
}

export { Decaf };
