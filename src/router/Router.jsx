import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/shaire/about/About";
import Career from "../pages/shaire/career/Career";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsPage from "../pages/newsPages/NewsPage";
import PrivetRouts from "../priveRoutes/PrivetRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRouts>
            <NewsPage></NewsPage>
          </PrivetRouts>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
