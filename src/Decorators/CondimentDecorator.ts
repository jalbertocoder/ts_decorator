import { Beverage } from '../Beverages/Beverage';

abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;

    abstract getDescription(): string;
}

export { CondimentDecorator };
