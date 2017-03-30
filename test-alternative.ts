import { PostController } from "./PostController";
import { PostRepository } from "./PostRepository";
import { expect } from "chai";
import * as sinon from "sinon";
import { Mocker, MockerCollection } from "./test-utils";

describe("test with mocked data", function () {

    const mockers = new MockerCollection();
    before(function () {
        mockers.create(PostRepository)
               .stub("getList")
               .returns([{
                    id: 1,
                    name: "Test"
                }]);
    });

    after(function () {
        mockers.reset();
    });

    it("controller get action should return proper data", function () {
        const controllerResult = PostController.get();
        expect(controllerResult).to.be.eql([{
            id: 1,
            name: "Test"
        }]);
    });
});

describe("test without mocked data", function () {

    it("controller get action should return proper data", function () {
        const controllerResult = PostController.get();
        expect(controllerResult).to.be.eql([{
            id: 1,
            name: "Hello"
        }, {
            id: 2,
            name: "Bye"
        }]);
    });
});