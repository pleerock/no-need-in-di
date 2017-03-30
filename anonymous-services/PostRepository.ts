export const PostRepository = new class {

    getList() {
        return [this.getFirst(), this.getSecond()];
    }

    getFirst() {
        return {
            id: 1,
            name: "Hello"
        };
    }

    getSecond() {
        return {
            id: 2,
            name: "Bye"
        };
    }

};