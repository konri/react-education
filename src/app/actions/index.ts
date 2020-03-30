//ACTION TYPES;
import { Action } from 'redux';
// import _ from 'lodash';
import jsonPlaceholderAPI from '../apis/jsonPlaceholderAPI';
import { State } from '../reducers';
import { Dispatch } from 'react';
import { Post } from '../model/Post';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export interface PostAction<T> extends Action {
	payload: T;
}

export const fetchPostsThenUsers = () => async (dispatch: Dispatch<any>, getState: () => State) => {
	/*
	 if you would like to call another action from inner action, you need to do it via dispatch (like in angular in effect
	 await here because we would like to wait until fetchPost action will be done.
	 */
	await dispatch(fetchPosts());

	new Set(getState().posts.map((post: Post) => post.userId)).forEach((id: number) => dispatch(fetchUser(id)));

	// equivalent in lodash
	// _.chain(getState().posts)
	// 	.map('userId')
	// 	.uniq()
	// 	.forEach(id => dispatch(fetchUser(id)))
	// 	.value();

};

export const fetchPosts = () => async (dispatch: any) => {
	const response = await jsonPlaceholderAPI.get('/posts');

	dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = (id: number) => async (dispatch: any) => {
	const { data } = await jsonPlaceholderAPI.get(`/users/${id}`);
	dispatch({ type: FETCH_USER, payload: data });
};

//basic action without any async actions

export const selectSong = (song: string) => ({
	type: 'SONG_SELECTED',
	payload: song
});
