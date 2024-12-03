import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BlogList from "./blog";
import BannerBlog from "./banner-blog";
const BlogPage = () => {
    return (
        <main>
            <BannerBlog/>
            <BlogList></BlogList>
        </main>
    );
};

export default memo(BlogPage);