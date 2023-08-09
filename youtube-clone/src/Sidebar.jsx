import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAlt, ExpandMore} from "@mui/icons-material";

function Sidebar() {
    return (
        <div className="sidebar">
            
            <SidebarRow selected icon={<Home/>} title={"Home"}/>
            <SidebarRow icon={<Whatshot/>} title={"Trending"}/>
            <SidebarRow icon={<Subscriptions/>} title={"Subscription"} />
            <hr />
            <SidebarRow icon={<VideoLibrary/>} title={"Library"}/>
            <SidebarRow icon={<History/>} title={"History"}/>
            <SidebarRow icon={<OndemandVideo/>} title={"Your Videos"}/>
            <SidebarRow icon={<WatchLater/>} title={"Watch Later"}/>
            <SidebarRow icon={<ThumbUpAlt/>} title={"Liked Videos"}/>
            <SidebarRow icon={<ExpandMore/>} title={"Show More"}/>
            <hr />




        </div>
    )

}

export default Sidebar;