import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuitstats";

const TuitListItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(

        <div className="list-group-item">
            <div className="row pt-2 ">
                <div className="col-1 ps-2 ">
                    <img alt="" width={50} className=" float-left float-start rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div className="ps-4"><span className="fw-bold">{tuit.userName}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="ps-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-patch-check-fill" color="blue"
                                                    viewBox="0 0 16 16">
                            <path
                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg></span>
                        <span className="text-muted ps-2"> {tuit.handle} - {tuit.time} </span></div>
                    <div>{tuit.detail}</div>

                    <div className="mt-2 ">
                        <div
                            className="w-100 ps-4 pe-2 align-items-center">
                            {tuit.tuit}
                        </div>
                        <div className="mt-1 w-100 ps-3 pe-2 align-items-center">
                            {tuit.message}
                        </div>
                    </div>
                    <br/>

                    <TuitStats tuit={tuit}/>

                </div>
            </div>

        </div>);
};
export default TuitListItem;