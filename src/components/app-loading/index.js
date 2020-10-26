import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export default class AppLoading extends Component {
    constructor(){
        super();
        this.el = document.createElement('div');
        this.el.className = 'loading-wrap';
    }
    render() {
        return ReactDOM.createPortal(
                <div className='loading'>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603535043175&di=e3b79e3a9d21b07dc47fe3cf408cced1&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F47bfa2df6ad2db8fc84eb52770b566cde15b8e5e20c94-ouPK1z_fw658" alt=""/>
                </div>,
                this.el
            )
    }
    componentDidMount(){
        document.body.appendChild(this.el);
    }
    componentWillUnmount(){
        document.body.removeChild(this.el);
    }
    
}
