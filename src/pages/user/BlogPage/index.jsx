import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BlogList from "./blog";
const BlogPage = () => {
    return (
        <main>
            <BlogList></BlogList>
        </main>
    );
};

export default memo(BlogPage);