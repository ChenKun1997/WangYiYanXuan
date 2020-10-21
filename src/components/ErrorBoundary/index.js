import React, { Component } from 'react';
import './style.scss'

export default class ErrorBoundary extends Component {
    state = {
        isError: false
    }

    //出错后显示的dom结构
    getShowErrorDOM = () => (
        <div>
            <h1>出错了</h1>
        </div>
    )
    render() {
        const {isError} = this.state;
        const {children} = this.props;
        return isError ?  this.getShowErrorDOM(): children;
    }
    componentDidCatch(error){
        this.setState({isError:true})
    }
}
