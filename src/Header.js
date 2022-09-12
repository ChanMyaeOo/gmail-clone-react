import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(dispatch(logout()));
    };
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img
                    src="https://png.monster/wp-content/uploads/2020/11/Gmail-Logo-8a7ef220.png"
                    alt="gmail"
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header__middleDownArrow" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut}>
                    {user?.email[0]}
                </Avatar>
            </div>
        </div>
    );
}

export default Header;
