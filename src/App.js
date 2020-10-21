import React,{Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loading from './components/Loading';
import { TabBar,TabItem } from "./components/app-tab-bar";
import routes from './routes'



const tabs = [
    {id:1,name:'首页',path:'/home',icon:'iconfont iconshouye'},
    {id:2,name:'分类',path:'/category',icon:'iconfont iconfenlei'},
    {id:3,name:'购物车',path:'/cart',icon:'iconfont icongouwuche2'},
    {id:4,name:'我的',path:'/mine',icon:'iconfont iconwode'}
]


export default function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                {/* 根页面 */}
                {renderRoutes(routes)}
                <TabBar>
                    {tabs.map(item=>(
                        <TabItem className="tab-item" key={item.id} {...item}/>
                        // <li key={item.id}>
                        //     <NavLink to={item.path}>
                        //         <span className={item.icon}></span>
                        //         <span>{item.name}</span>
                        //     </NavLink>
                        // </li>
                    ))}
                </TabBar>
            </Suspense>
        </Router>
    )
}
