import { Routes, Route } from 'react-router-dom';
import { ROUTER } from "./utils/router";
import HomePage from './pages/user/HomePage';
import MasterLayout from './pages/user/theme/MasterLayout';
import ProfilePage from './pages/user/ProfilePage';
import CategoryPage from 'pages/user/CategoryPage';
import DetailPage from './pages/user/DetailPage';
import CartPage from 'pages/user/CartPage';
import OrderTracking from 'pages/user/ProfilePage/TrackingPage';
import InfoPage from 'pages/user/ProfilePage/InfoPage';
import SettingPage from 'pages/user/ProfilePage/SettingPage';
import CheckoutPage from 'pages/user/CheckoutPage';
import BlogPage from 'pages/user/BlogPage';
import BlogDetailPage from 'pages/user/BlogDetailPage';
const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            element: <HomePage />,
        },
        {
            path: ROUTER.USER.PROFILE,
            element: <ProfilePage />,
            children: [
                {
                    index: true,
                    path: ROUTER.USER.INFO,
                    element: <InfoPage />,

                },
                {
                    path: ROUTER.USER.TRACKING,
                    element: <OrderTracking />,

                },
                {
                    path: ROUTER.USER.SETTINGS,
                    element: <SettingPage />,

                },
            ]
        },
        {
            path: ROUTER.USER.CATEGORY,
            element: <CategoryPage />,
        },
        {
            path: ROUTER.USER.DETAIL,
            element: <DetailPage />,
        },
        {
            path: ROUTER.USER.CART,
            element: <CartPage />,
        },
        {
            path: ROUTER.USER.CHECKOUT,
            element: <CheckoutPage />,
        },
        {
            path: ROUTER.USER.BLOG,
            component: <BlogPage />,
        },
        {
            path: ROUTER.USER.BLOG,
            component: <BlogDetailPage />,
        }
        
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element}>
                        {item.children &&
                            item.children.map((child, childIndex) => (
                                <Route
                                    key={childIndex}
                                    path={child.path}
                                    element={child.element}
                                />
                            ))}
                    </Route>
                ))}
            </Routes>
        </MasterLayout>
    )
};

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;