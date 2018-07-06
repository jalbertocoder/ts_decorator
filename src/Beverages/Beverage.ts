abstract class Beverage {
    description: string = 'Unknown Beverage';
    constructor() {}

    abstract cost(): number;

    getDescription(): string {
        return this.description;
    }
}

export { Beverage };
