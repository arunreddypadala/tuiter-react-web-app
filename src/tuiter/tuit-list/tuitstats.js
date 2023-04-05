import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = ({tuit}) => {
    let [liked, setLiked] = useState(tuit.liked);
    let [disliked, setDisliked] = useState(tuit.disliked);

    const dispatch = useDispatch();

    const changeLiked = () => {
        setLiked(!liked)
    }
    const changeDisliked = () => {
        setDisliked(!disliked)
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="bi bi-chat"></i> &nbsp;
                    <span className="pl-sm-2"> {tuit.replies}&nbsp; </span>
                </Link>
            </div>
            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="bi bi-arrow-repeat"></i> &nbsp;
                    <span className="pl-sm-2"> {tuit.retuits} &nbsp;</span>
                </Link>
            </div>

            <div className="col-2 justify-content-center">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        !liked &&
                        <i onClick= { () =>
                            dispatch(updateTuitThunk({
                                                         ...tuit,
                                                         likes: typeof tuit.likes === 'undefined'? 1:tuit.likes - 1}))}
                           className="bi bi-heart-fill me-2 text-danger"></i>
                    }
                    {
                        liked &&
                        <i onClick= { () =>
                            dispatch(updateTuitThunk({
                                                         ...tuit,
                                                         liked: true,
                                                         likes: typeof tuit.likes === 'undefined'? 1:tuit.likes + 1}))}
                           className="bi bi-heart me-2 "></i>

                    }
                    <span className="pl-sm-2"> {tuit.likes} &nbsp; </span>
                </Link>
            </div>

            <div className="col-2">
                <Link onClick={changeDisliked} className="nav-link" to={""}>
                    {
                        !disliked &&
                        <i onClick= { () =>
                            dispatch(updateTuitThunk({
                                                         ...tuit,

                                                         dislikes: typeof tuit.dislikes === 'undefined'? 1:tuit.dislikes - 1}))}
                           className="bi bi-hand-thumbs-down-fill me-2 text-black"></i>
                    }
                    {
                        disliked &&
                        <i onClick= { () =>
                            dispatch(updateTuitThunk({
                                                         ...tuit,
                                                         disliked: true,
                                                         dislikes: typeof tuit.dislikes === 'undefined'? 1:tuit.dislikes + 1}))}
                           className="bi bi-hand-thumbs-down-fill me-2 text-muted "></i>

                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuit.dislikes}&nbsp; </span>
                </Link>
            </div>

            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="bi bi-upload"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;