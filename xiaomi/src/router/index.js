import Home from "../components/home"
import Classify from "../components/classify"
import Cart from "../components/cart"
import Mine from "../components/mine"
import Login from "../components/login"
import Reg from "../components/reg"
import NotFound from "../components/NotFound"

export const routes=[
    {
        path:"/home",
        component:Home
    },{
        path:"/classify",
        component:Classify
    },{
        path:"/cart",
        component:Cart
    },{
        path:"/mine",
        component:Mine
    },{
        path:"/login",
        component:Login
    },{
        path:"/reg",
        component:Reg
    },{
        path:"/404",
        component:NotFound
    }
]