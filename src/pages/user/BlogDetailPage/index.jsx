import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BlogDetail from "./blog-detail";

const BlogDetailPage = () => {
    return (
        <main>
            <BlogDetail />
        </main>
    );
};

export default memo(BlogDetailPage);