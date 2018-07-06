abstract class Beverage {
    constructor() {}

    abstract cost(): number;

    getDescription(): void {
        console.log('This is the description of the beverage');
    }
}

export { Beverage };
