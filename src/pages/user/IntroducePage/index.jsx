import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import Introduce from "./introduce";
const IntroducePage = () => {
    return (
        <main>
            <Introduce />
        </main>
    );
};

export default memo(IntroducePage);