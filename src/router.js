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
import { UseProtectedRoute, UseProtectedRouteCheckout } from 'components/protected-route';
import PaymentSuccessPage from 'pages/user/PaymentStatusPage/PaymentSuccessPage';
import PaymentFailedPage from 'pages/user/PaymentStatusPage/PaymentFailedPage';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            element: <HomePage />,
        },
        {
            path: ROUTER.USER.PROFILE,
            element: <UseProtectedRoute><ProfilePage /></UseProtectedRoute>,
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
            element: <UseProtectedRoute><CartPage /></UseProtectedRoute>,
        },
        {
            path: ROUTER.USER.CHECKOUT,
            element: <UseProtectedRouteCheckout><CheckoutPage /></UseProtectedRouteCheckout>,
        },
        {
            path: ROUTER.USER.BLOG,
            element: <BlogPage />,
        },
        {
            path: ROUTER.USER.BLOGDETAIL,
            element: <BlogDetailPage />,
        },
        {
            path: ROUTER.USER.PAYMENTSUCCESS,
            element: <PaymentSuccessPage />,
        },
        {
            path: ROUTER.USER.PAYMENTFAILED,
            element: <PaymentFailedPage />,
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