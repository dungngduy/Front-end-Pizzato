import { memo } from "react";
import "assets/user/scss/category-page.scss";
import BannerAbout from "./banner-about";
import About from "./about";
const IntroducePage = () => {
  return (
    <main>
      {/* Banner About */}
      <BannerAbout />

      {/* About */}
      <About />
    </main>
  );
};

export default memo(IntroducePage);
