const WhoToFollowListItem = (who) => {
    return(`
     <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-2  ps-0 position-relative">
             <img class="float-left rounded-circle" src=${who.avatarIcon} height = 45px width="45px">
             </div>
            <div class="col-6 ps-2">
              <div class="fw-bolder">${who.userName}<i class="fa-solid fa-circle-check float-left"></i> </div>
              <div class="text-muted">@${who.handle}</div>
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-sm btn-primary w-100 rounded-pill float-end">Follow</button>
            </div>
          </div>
        </li>
`);
}
export default WhoToFollowListItem;