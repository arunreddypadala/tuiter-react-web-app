const PostListItem = (posts) => {
    return(`
         <ul>
          <div class="row">
           <div class="col-1 ps-0 ">
                <img class="float-left float-start rounded-circle" src=${posts.avatarIcon} height = 45px width="45px">
           </div>
           <div class="col-11">
              <div class="text-white fw-bold">${posts.userName} <i class="fa-solid fa-circle-check"></i> <span class="text-muted"> ${posts.handle} - ${posts.time} </span> </div>
              <div class="text-white">${posts.post}</div>
                    
                    <div class="mt-2 border border-secondary rounded">
                
                    <img class=" w-100 border-bottom border-secondary rounded " src=${posts.image}  height = "340px">
                    <div class="w-100 ps-3 pt-2 pe-2 fw-bolder align-items-center text-white ">
                    ${posts.title}
                    </div>
                    <div class="mt-1 w-100 ps-3 pe-2 align-items-center">
                    ${posts.message}
                    </div>
                    <div class="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
                    <i class="fa-solid fa-link"></i> ${posts.link}
                    </div>      
                    </div>
                    <br/>
                
                <ul class="nav   align-items-center nav-justified">
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-regular fa-comment"></i> &nbsp ${posts.comments}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-solid fa-retweet"></i> &nbsp ${posts.retweets}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fa-regular fa-heart"></i> &nbsp${posts.likes}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted " href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i>&nbsp </a>
                </li>
                
                
           </ul>
           </div>
          </div>
        </ul>      
`);
}
export default PostListItem;