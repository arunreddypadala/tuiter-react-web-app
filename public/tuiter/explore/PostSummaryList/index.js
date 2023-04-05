import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";


const PostSummaryList = () => {
    return (`
        ${post.map(item2 => PostSummaryItem(item2)).join('')} 
        </ul>
`); }

export default PostSummaryList;
