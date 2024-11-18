import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTER } from './utils/router';
import InfoPage from "./InfoPage";
import Settings from "./SettingPage";
import Tracking from "./TrackingPage";

const MainContent = () => {
    return (
        <div className="flex-[9] bg-gray-100 p-6">
            <Router>
                <Routes>
                    <Route index element={<InfoPage />} />  {/* Trang mặc định */}
                    <Route path={ROUTER.USER.TRACKING} element={<Tracking />} />
                    <Route path={ROUTER.USER.SETTINGS} element={<Settings />} />
                </Routes>
            </Router>
        </div>
    );
};

export default memo(MainContent);