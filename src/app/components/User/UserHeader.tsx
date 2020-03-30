import React from 'react';
import { User } from '../../model/User';
import { State } from '../../reducers';
import { connect } from 'react-redux';

interface UserHeaderProps {
	user?: User;
	userId: number;
}

export const UserHeader = ({ user }: UserHeaderProps) => {
	if (!user) return null;

	return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state: State, ownProps: UserHeaderProps) => {
	return { user: state.users[ownProps.userId] };
};

export default connect(mapStateToProps)(UserHeader);
