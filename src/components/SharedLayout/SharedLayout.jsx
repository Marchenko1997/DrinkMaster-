import HeaderMain from "../HeaderMain/HeaderMain";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import  FollowCursor from "../FollowCursor/FollowCursor";

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <FollowCursor />
    </>
  );
};

export default SharedLayout;
