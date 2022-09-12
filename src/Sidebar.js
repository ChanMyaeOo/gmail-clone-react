import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SidebarOption from "./SidebarOption";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button
                onClick={() => dispatch(openSendMessage())}
                startIcon={<AddIcon />}
                className="sidebar__compose"
            >
                Compose
            </Button>
            <SidebarOption
                Icon={InboxIcon}
                title="Inbox"
                number={34}
                selected={true}
            />
            <SidebarOption Icon={StarIcon} title="Starred" number={25} />
            <SidebarOption Icon={AccessAlarmIcon} title="Snoozed" number={15} />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number={28}
            />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={10} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={5} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={27} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
