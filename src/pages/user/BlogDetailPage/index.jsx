import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BlogDetail from "./blogDetailPage";

const BlogDetailPage = () => {
    return (
        <main>
            <BlogDetail></BlogDetail>
        </main>
    );
};

export default memo(BlogDetailPage);