import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const TuitStats = ({tuit}) => {
    let [liked, setLiked] = useState(tuit.liked);
    const changeLiked = () => {
        setLiked(!liked)
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="bi bi-chat"></i> &nbsp;
                    <span className="pl-sm-2"> {tuit.replies} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="bi bi-arrow-repeat"></i> &nbsp;
                    <span className="pl-sm-2"> {tuit.retuits} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        !liked &&
                        <i className="bi bi-heart"></i>
                    }
                    {
                        liked &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="red" className="bi bi-heart-fill"
                             viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuit.likes} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="bi bi-upload"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;