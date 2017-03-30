import {PostRepository} from "./PostRepository";

export const PostController = new class {

    get() {
        return PostRepository.getList();
    }

};