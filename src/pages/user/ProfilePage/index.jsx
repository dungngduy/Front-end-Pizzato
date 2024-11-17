import { memo } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./side-bar";

const ProfilePage = () => {
    return (
            <div className="container flex">
                {/* Sidebar chiếm 3 phần */}
                <div className="flex-[3]">
                    <SideBar />
                </div>

                {/* MainContent chiếm 9 phần */}
                <div className="flex-[9]">
                    <Outlet />
                </div>
            </div>
    );
};

export default memo(ProfilePage);