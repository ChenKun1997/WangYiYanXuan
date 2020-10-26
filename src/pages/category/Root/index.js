import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import {requestHomeData} from '../../home/Root/reducer';
import AppHeader from '../../../components/app-header';
import Menu from './children/Menu';
import List from './children/List';
import {requestListDataById} from './reducer';
import AppLoading from '../../../components/app-loading';
import './style.scss'


class index extends PureComponent {
    state = {};
    static getDerivedStateFromProps(props,state){

        let menuID = null;
        //计算选中得菜单
        if(props.location.state && props.location.state.id){
            menuID = props.location.state.id;
        }else if(props.menu.length > 0){
            menuID = props.menu[0].id;
        }
        let showData = [];
        if(menuID && props.listMap[menuID]){
            showData = props.listMap[menuID]
        }
        return {
            menuID,
            showData
        }
    }
    render() {
        const {menuID,showData} = this.state;
        const {menu,history,loading} = this.props;
        return (
            <div className="page" id="category-root">
                {loading && <AppLoading/> }
                <AppHeader/>
                <div className="content">
                    <Menu
                     data={menu}
                     selected={menuID}
                     onChange={(value)=>{
                        history.replace({pathname:'/category',state:{id:value}});
                     }}
                     />
                     <List data={showData}/>
                </div>
            </div>
        )
    }
    // 请求菜单列表数据
    requestListData = (id) => {
        if(!this.props.listMap[this.state.menuID]){
            this.props.requestListData(id)
        }
    }
    componentDidMount(){
        //如果没有数据，自己再去请求一遍
        if(this.props.menu.length <= 0){
            this.props.requsetMenuData();
        }
        // 判断是否有menuID，有就请求列表数据
        if(this.state.menuID){
            this.requestListData(this.state.menuID)
        }
    }
    componentDidUpdate(oldProps,oldState){
        if(oldState.menuID !== this.state.menuID){
            // id变化了
            this.requestListData(this.state.menuID);
        }
    }
}

export default connect(
    (state)=>({
        menu:state.home.cate,
        listMap:state.cate.menuListData,
        loading:state.cate.loading
    }),
    (dispatch)=>({
        requsetMenuData(){
            dispatch(requestHomeData());
        },
        requestListData(id){
            dispatch(requestListDataById(id));
        }
    })
)(index);