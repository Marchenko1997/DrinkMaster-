import HeaderMain from "../HeaderMain/HeaderMain";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
