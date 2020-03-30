import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import { Post } from "../model/Post";

export interface Store {
    posts: Array<Post>;
}
export default combineReducers({
    posts: postsReducer
})

