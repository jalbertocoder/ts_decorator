import { Beverage } from './Beverage';

class HouseBlend extends Beverage {
    price: number = 3;

    cost(): number {
        console.log('HouseBlend cost ', this.price);
        return this.price;
    }
}

export { HouseBlend };
