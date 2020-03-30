//ACTION TYPES;
import jsonPlaceholderAPI from "../apis/jsonPlaceholderAPI";
import { Action } from "redux";

export const FETCH_POSTS = 'FETCH_POSTS';

export interface PostAction<T> extends Action {
    payload: T;
}

export const fetchPosts = () => async (dispatch: any) => {
    const response = await jsonPlaceholderAPI.get('/posts');

    dispatch({type: FETCH_POSTS, payload: response.data});
};

//basic action without any async actions

export const selectSong = (song: string) => ({
    type: 'SONG_SELECTED',
    payload: song
});
