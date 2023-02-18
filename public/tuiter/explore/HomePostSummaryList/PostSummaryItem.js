const PostSummaryItem = (post) => {
    return(`
         <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-9">
              <div class="text-secondary">${post.topic}</div>
              <div class="text-white fw-bold">${post.userName} <i class="fa-solid fa-circle-check"></i>  <span class="text-muted"> - ${post.time} </span> </div>
              <div class="text-white fw-bold">${post.title}</div>
            </div>
            <div class="col-3">
              <img class="margin-all-around float-end rounded" src=${post.image} width="100px ">
            </div>
          </div>
        </li>      
`);
}
export default PostSummaryItem;