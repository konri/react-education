import React from "react";
import { connect } from "react-redux";
import { Store } from "../../reducers";
import { Post } from "../../model/Post";
import { fetchPosts } from "../../actions";

interface PostListProps {
    posts: Array<Post>;

    fetchPosts(): void;
}

class PostList extends React.Component<PostListProps, any> {
    componentDidMount(): void {
        console.log('siema');
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <p>Hi redux!</p>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
        );
    }

    private renderList() {
        // important: react list must have key for each item
        return this.props.posts.map((post: Post) => (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user"/>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        ));
    }
}

const mapStateToProps = (state: Store) => {
    return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPosts})(PostList);