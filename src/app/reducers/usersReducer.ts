import { FETCH_USER, PostAction } from '../actions';
import { User } from '../model/User';

export interface UsersState {
	[key: number]: User;
}

export default (state: UsersState = {}, action: PostAction<User>) => {
	console.log(state);
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				[action.payload.id]: action.payload
			};
		default:
			return state;
	}
}
