import {PostRepository} from "./PostRepository";

export class PostController {

    static get() {
        return PostRepository.getList();
    }

}