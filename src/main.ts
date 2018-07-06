import { Beverage } from './Beverages/Beverage';
import { DarkRoast } from './Beverages/DarkRoast';
import { Decaf } from './Beverages/Decaf';
import { Espresso } from './Beverages/Espresso';
import { HouseBlend } from './Beverages/HouseBlend';

import { CondimentDecorator } from './Decorators/CondimentDecorator';
import { Milk } from './Decorators/Milk';
import { Mocha } from './Decorators/Mocha';
import { Soy } from './Decorators/Soy';
import { Whip } from './Decorators/Whip';

function main() {
    let darkRoast: Beverage;
    let decaf: Beverage;
    let espresso: Beverage;
    let houseBlend: Beverage;

    darkRoast = new DarkRoast();
    decaf = new Decaf();
    espresso = new Espresso();
    houseBlend = new HouseBlend();

    darkRoast.cost();
    decaf.cost();
    espresso.cost();
    houseBlend.cost();

    darkRoast.getDescription();
    decaf.getDescription();
    espresso.getDescription();
    houseBlend.getDescription();

    let milk: CondimentDecorator;
    let mocha: CondimentDecorator;
    let soy: CondimentDecorator;
    let whip: CondimentDecorator;

    milk = new Milk(darkRoast);
    mocha = new Mocha(decaf);
    soy = new Soy(espresso);
    whip = new Whip(houseBlend);

    milk.cost();
    mocha.cost();
    soy.cost();
    whip.cost();

    milk.getDescription();
    mocha.getDescription();
    soy.getDescription();
    whip.getDescription();

    let specialBeverage: Beverage;
    specialBeverage = new Milk(new Mocha(new Soy(new Whip(new Espresso))));
    specialBeverage.cost();
    specialBeverage.getDescription();
}

main();
