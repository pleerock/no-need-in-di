import {PostController} from "./PostController";
import {PostRepository} from "./PostRepository";
import {expect} from "chai";
import * as sinon from "sinon";

describe("static service => with mocked data", function () {
    before(function () {
        const stub = sinon.stub(PostRepository, "getList");
        stub.returns([{
            id: 1,
            name: "Test"
        }]);
    });

    after(function () {
        (PostRepository.getList as any).restore();
    });

    it("controller get action should return proper data", function () {
        const controllerResult = PostController.get();
        expect(controllerResult).to.be.eql([{
            id: 1,
            name: "Test"
        }]);
    });
});

describe("static service => without mocked data", function () {

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