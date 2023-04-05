import PostSummaryList from "./PostSummaryList/index.js";
import post from "./PostSummaryList/posts.js";

const ExploreComponent = () => {
    return (`       
           <div class="row">
            <div class= "col-11">
              <div class="position-relative">
                <input class="form-control rounded-pill mb-2 ps-5" placeholder = "  Search Tuiter">
                <i class="fa-solid text-secondary position-absolute wd-search-icon fa-magnifying-glass"></i>
              </div> </div>
    
            <div class="col-1 align-items-center">
              <i class="fa-solid fa-gear fa-xl mt-3 text-primary"></i>
            </div>
           </div>
          
           
           
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           
          
           <!-- image with overlaid text -->
           <div class="list-group position-relative mt-2">
        <img src="spaceX_starship.png" width="100%" >
        <h3 class="position-absolute fw-bold bottom-0 left-0 ms-1 text-secondary">SpaceX's Starship</h3>
      </div>
           
           <div class="list-group mt-2">
           ${PostSummaryList(post)}
           </div>
    `);
}
export default ExploreComponent;
