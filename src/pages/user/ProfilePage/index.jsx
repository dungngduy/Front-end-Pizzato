import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SideBar from "./side-bar";

const ProfilePage = () => {
    return (
        <>
            <Helmet>
                <title>Quản lý thông tin - Pizzato</title>
                <meta name="description" content="Đây là trang quản lý thông tin người dùng của website." />
            </Helmet>
            <div className="container flex">
                <div className="flex-[3]">
                    <SideBar />
                </div>
                <div className="flex-[9]">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default memo(ProfilePage);