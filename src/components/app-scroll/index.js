import React, { Component } from 'react';
// import IScroll from 'iscroll';
import BScroll from '@better-scroll/core';
import PullDown from '@better-scroll/pull-down';

BScroll.use(PullDown);

 class AppScroll extends Component {
     scrollViewDOM = React.createRef()
    render() {
        return (
            <div ref={this.scrollViewDOM} className={`scroll-view ${this.props.className}`}>
                <div className='scroll-wrap'>
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.scrollViewDOM.current,{
            pullDownRefresh: true
        })
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh();
        })
    }
}
export default AppScroll;