import { memo } from "react";
import { Helmet } from "react-helmet-async";
import "assets/user/scss/category-page.scss";
import BlogList from "./blog";
import BannerBlog from "./banner-blog";
const BlogPage = () => {
    return (
        <>
            <Helmet>
                <title>Bài viết - Pizzato</title>
                <meta name="description" content="Đây là trang bài viết của website." />
            </Helmet>
            <main>
                <BannerBlog />
                <BlogList />
            </main>
        </>
    );
};

export default memo(BlogPage);