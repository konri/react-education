import { Post } from "../model/Post";
import { FETCH_POSTS, PostAction } from "../actions";

export default (state: Array<Post> = [], action: PostAction<any>) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
};