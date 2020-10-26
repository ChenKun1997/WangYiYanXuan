import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestHomeData} from './reducer'
import Banner from './children/banner';
import Cate from './children/cate';
import NewGoods from './children/new-goods';
import Swiper from 'swiper/swiper-bundle';
import AppScroll from '../../../components/app-scroll';
import AppHeader from '../../../components/app-header';
import AppLoading from '../../../components/app-loading'
import 'swiper/swiper-bundle.css';
import './style.scss';
class index extends Component {
    bannerRef = React.createRef();
    render() {
        const {banner,cate,newGoods,loading}  = this.props;
        return (
            <div className="page home-root">
                {loading && <AppLoading/>}
                <AppHeader />
                <AppScroll className="content">
                    <Banner data={banner} ref={this.bannerRef}/>
                    <Cate data={cate}/>
                    <NewGoods data={newGoods}/>
                </AppScroll>
            </div>
        )
    };
    componentDidMount(){
        //请求数据
        this.props.requestData();
    };
    componentDidUpdate(oldProps,oldState){
        if(oldProps.banner !== this.props.banner){
            //构建轮播图
            new Swiper(this.bannerRef.current,{
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true, 
            })
        }
    };
}

export default connect(
    (state)=>({
        banner:state.home.banner,
        cate:state.home.cate,
        newGoods:state.home.newGoods,
        loading:state.home.loading
    }),
    (dispatch)=>({
        requestData(){
            dispatch(requestHomeData());
        }
    })
)(index);