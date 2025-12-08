import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home'
import Layout from "../pages/layouts/Layout";
import BookForm from "../pages/BookForm";
import Search from "../pages/Search";
import BookDetails from "../pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path :  "",
        element : <Home/>
      },
      {
        path :  "/books/:id",
        element : <BookDetails/>
      },
      {
        path :  "/create",
        element : <BookForm/>
      },
      {
        path :  "/edit/:id",
        element : <BookForm/>
      },
      {
        path :  "/search",
        element : <Search/>
      },
    ]
  },
]);

export default router;