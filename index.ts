import {PostController as AnonymousPostController} from "./anonymous-services/PostController";
import {PostController as StaticPostController} from "./static-services/PostController";

console.log(AnonymousPostController.get());
console.log(StaticPostController.get());
