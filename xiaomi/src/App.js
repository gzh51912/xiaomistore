import React from 'react';
import {Route,Switch,Redirect,NavLink} from "react-router-dom"
import './App.css';
import {routes} from "./router"

function App() {
  return (
    <div className="App">
          <Switch>
                {
                  routes.map(item=>{
                    return <Route key={item.path} path={item.path} component={item.component} />
                  })
                }
                <Redirect from="/" to="/home" exact />
                <Redirect  to="/404" />
          </Switch>
          <ul className="footer">
              <li>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/classify">分类</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/mine">我的</NavLink>
              </li>
          </ul>
    </div>
  );
}

export default App;
