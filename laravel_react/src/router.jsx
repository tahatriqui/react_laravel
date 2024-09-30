import { createBrowserRouter } from "react-router-dom";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);

export default router;
