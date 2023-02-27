import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a href="#" className="list-group-item"><i className="bi bi-twitter"></i></a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Home </span>
            </Link>
            <Link to="/tuiter/explorescreen" className={`list-group-item
                    ${active === 'explorescreen'?'active':''}`}>
                <i className="bi bi-hash"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Explore </span>
            </Link>
            <a href="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Notifications </span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-chat-square-quote-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Messages </span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmarks-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Bookmarks </span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Lists </span>
            </a>
            <a href="#" className={`list-group-item
                            ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Profile </span>
            </a>
            <a href="#" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                <i className="bi bi-info-circle-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> More </span>
            </a>
            <a href="/" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                <i className="bi bi-plus-circle-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Labs </span>
            </a>
</div>
);
};
export default NavigationSidebar;