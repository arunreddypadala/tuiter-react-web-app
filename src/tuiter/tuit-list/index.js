import React from "react";
//import tuitArray from '../tuits/tuits.json';
import {useSelector} from "react-redux";
import TuitListItem from "./tuit-item";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <div className="list-group">
            {
                tuitArray.map((tuit,_id) =>
                                  <TuitListItem
                                      key={tuit._id} tuit={tuit}/>
                )
            }
        </div>
    );
};
export default TuitList;