import * as sinon from "sinon";

export class MockerCollection {
    private mockers: Mocker<any>[] = [];

    create<T>(target: T) {
        const mocker = new Mocker<T>(target);
        this.mockers.push(mocker);
        return mocker;
    }

    add(mocker: Mocker<any>) {
        this.mockers.push(mocker);
    }

    reset() {
        this.mockers.forEach(mocker => mocker.reset());
    }
}

export class Mocker<T> { // naming is conditional

    private properties: string[] = [];

    constructor(private target: T) {
    }

    stub(property: keyof T) {
        this.properties.push(property);
        return sinon.stub(this.target, property);
    }

    reset() {
        this.properties.forEach(property => {
            (this.target as any)[property].restore();
        });
    }

}