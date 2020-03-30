import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import { Post } from "../model/Post";
import usersReducer, { UsersState } from './usersReducer';

export interface State {
    posts: Array<Post>;
    users: UsersState
}
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})

