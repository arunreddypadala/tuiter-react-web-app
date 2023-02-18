import PostListItem from "./PostListItem.js";
import posts from "./posts.js";


const PostList = () => {
    return (`
        ${posts.map(item2 => PostListItem(item2)).join('')} 
        </ul>
`); }

export default PostList;
