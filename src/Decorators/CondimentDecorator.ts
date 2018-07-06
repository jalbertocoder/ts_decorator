import { Beverage } from '../Beverages/Beverage';

abstract class CondimentDecorator extends Beverage {

    getDescription(): void {
        console.log('This is the description of the Condiment');
    }
}

export { CondimentDecorator };
