import React from "react";
import postArray from './post.json';
import PostListItem from "./post-list-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postArray.map(post =>
                                   <PostListItem
                                       key={post._id} post={post}/>
                                    )
            }
        </ul>
    );
};
export default PostList;