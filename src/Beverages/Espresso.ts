import { Beverage } from './Beverage';

class Espresso extends Beverage {
    price: number = 2;

    cost(): number {
        console.log('Espresso cost ', this.price);
        return this.price;
    }
}

export { Espresso };
