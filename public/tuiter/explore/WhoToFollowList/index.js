import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
          <li class="list-group-item">
          <div class="row">
            <span class="fw-bolder"> Who to Follow </span>
          </div>
            </li>

        ${who.map(item => WhoToFollowListItem(item)).join('')} 
        </ul>
`); }

export default WhoToFollowList;