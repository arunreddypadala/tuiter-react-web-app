import React from "react";


const PostListItem = (
    {
        post
    }
) => {
    return(
        <ul>
            <div className="row pt-2">
                <div className="col-1 ps-0 ">
                    <img alt="" width={50} className=" float-left float-start rounded-circle" src={`/images/${post.avatarIcon}`}/>
                </div>
                <div className="col-11">
                    <div className="fw-bold">{post.userName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="bi bi-patch-check-fill" color="blue"
                             viewBox="0 0 16 16">
                            <path
                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        <span className="text-muted"> {post.handle} - {post.time} </span></div>
                    <div>{post.detail}</div>

                    <div className="mt-2 border border-secondary rounded">

                        <img alt="" className=" w-100 border-bottom border-secondary rounded "
                             src={`/images/${post.image} ` } height="340px" />
                        <div
                            className="w-100 ps-3 pe-2 fw-bolder align-items-center">
                            {post.title}
                        </div>
                        <div className="mt-1 w-100 ps-3 pe-2 align-items-center">
                            {post.message}
                        </div>
                    </div>
                    <br/>

                    <ul className="nav   align-items-center nav-justified">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-muted">
                                <i className="bi bi-chat"></i> {post.comments} </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-muted">
                                <i className="bi bi-arrow-repeat"></i> {post.retuits}</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-muted">
                                <i className="bi bi-heart"></i> {post.likes}</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-muted ">
                                <i className="bi bi-upload"></i>    </a>
                        </li>


                    </ul>
                </div>
            </div>
        </ul>);
};
export default PostListItem;