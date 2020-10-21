import React,{lazy} from 'react'
import {Redirect} from 'react-router-dom'
export default [
    {
        path: '/',
        exact: true,
        render: ()=><Redirect to='/home' />
    },
    {
        path: '/home',
        component: lazy(()=>import('../pages/home/Root'))
    },
    {
        path: '/category',
        component: lazy(()=>import('../pages/category/Root'))
    },
    {
        path: '/cart',
        component: lazy(()=>import('../pages/cart/Root'))
    },
    {
        path: '/mine',
        component: lazy(()=>import('../pages/mine/Root'))
    },
    {
        path:'',
        render: ()=><Redirect to='/home' />
    }
]