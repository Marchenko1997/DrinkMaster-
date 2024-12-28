import HeaderMain from "../HeaderMain/HeaderMain";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import FollowCursor from "../FollowCursor/FollowCursor";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <FollowCursor />
    </>
  );
};

export default SharedLayout;
