import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsId from "./components/NewsId";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
        children: [
          {
            path: "good",
            element: <p>Good</p>,
          },
          {
            path: ":newsId",
            element: <NewsId />,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
