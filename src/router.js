import {Routes, Route} from 'react-router-dom';
import { ROUTER } from "./utils/router";
import HomePage from './pages/user/HomePage';
import MasterLayout from './pages/user/theme/MasterLayout';
import ProfilePage from './pages/user/ProfilePage';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage />,
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            element={item.component}
                        />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
};

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;