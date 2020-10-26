import React from 'react';
import './style.scss'

export default function AppHeader() {
    return (
        <div className='app-header'>
            <input type="text" placeholder="搜索商品"/>
            <span className='iconfont iconsousuo'></span>
        </div>
    )
}
