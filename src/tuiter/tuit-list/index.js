import React , {useEffect} from "react";
//import tuitArray from '../tuits/tuits.json';
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(tuits)
    console.log(loading)
    return(
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map((tuit,_id) =>
                              <TuitListItem
                                  key={tuit._id} tuit={tuit}/>
                )
            }
        </div>
    );
};
export default TuitList;