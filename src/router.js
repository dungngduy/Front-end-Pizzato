import {Routes, Route} from 'react-router-dom';
import { ROUTER } from "./utils/router";
import HomePage from './pages/user/HomePage';
import MasterLayout from './pages/user/theme/MasterLayout';
import ProfilePage from './pages/user/ProfilePage';
import CategoryPage from 'pages/user/CategoryPage';
import DetailPage from './pages/user/DetailPage';

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
        {
            path: ROUTER.USER.CATEGORY,
            component: <CategoryPage />,
        },
        {
            path: ROUTER.USER.DETAIL,
            component: <DetailPage />,
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