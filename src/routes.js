import Cart from "./pages/Cart/Cart";
import Favorate from "./pages/Favorate/Favorate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";



const routes = [
    {path: '/', element: <Home />},
    {path: 'cart', element: <Cart />},
    {path: 'favorate', element: <Favorate />},
    {path: 'signup', element: <Login />},
    {path: 'login', element: <Login />},
    {path: 'product/:productId', element: <Product />},
    {path: '*', element: <NotFound />},
]


export default routes;