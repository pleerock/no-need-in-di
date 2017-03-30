export class PostRepository {

    static getList() {
        return [this.getFirst(), this.getSecond()];
    }

    static getFirst() {
        return {
            id: 1,
            name: "Hello"
        };
    }

    static getSecond() {
        return {
            id: 2,
            name: "Bye"
        };
    }

}