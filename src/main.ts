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

    console.log(darkRoast.getDescription(), 'cost', darkRoast.cost());
    console.log(decaf.getDescription(), 'cost', decaf.cost());
    console.log(espresso.getDescription(), 'cost', espresso.cost());
    console.log(houseBlend.getDescription(), 'cost', houseBlend.cost());

    let milk: CondimentDecorator;
    let mocha: CondimentDecorator;
    let soy: CondimentDecorator;
    let whip: CondimentDecorator;

    milk = new Milk(darkRoast);
    mocha = new Mocha(decaf);
    soy = new Soy(espresso);
    whip = new Whip(houseBlend);

    console.log(milk.getDescription(), 'cost', milk.cost());
    console.log(mocha.getDescription(), 'cost', mocha.cost());
    console.log(soy.getDescription(), 'cost', soy.cost());
    console.log(whip.getDescription(), 'cost', whip.cost());

    let specialBeverage: Beverage;
    specialBeverage = new Milk(new Mocha(new Soy(new Whip(new Espresso()))));

    console.log('===================== Especial Beverage =====================');
    console.log(specialBeverage.getDescription(), 'cost', specialBeverage.cost());
}

main();
