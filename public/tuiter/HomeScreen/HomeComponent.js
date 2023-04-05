import PostList from "./PostList/index.js";
import posts from "./PostList/posts.js";

const HomeComponents = () => {
    return (`  
           <div class="list-group mt-2">
           ${PostList(posts)}
           </div>
    `);
}
export default HomeComponents;
