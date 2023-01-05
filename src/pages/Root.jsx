import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/news"}>news</Link>
        <Link to={"/news/123"}>news Param</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
