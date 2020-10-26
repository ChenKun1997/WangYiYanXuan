import {http,api} from '../../../http'

// type
const SET_HOME_DATA = 'home/setHomeData';
const SET_HOME_LOADING = 'home/setHomeLoading';
// 初始state
const initalState = {
    banner:[],
    cate:[],
    newGoods:[],
    loading:false
}
// 同步事件
const setHomeData = (data)=>({
    type:SET_HOME_DATA,
    ...data
})
const setHomeLoading = (value) => ({
    type:SET_HOME_LOADING,
    value
})

// 异步事件
export const requestHomeData = () => async (dispatch) => {
    dispatch(setHomeLoading(true));
    const data = await http.get(api.HOME_API);
    dispatch(setHomeData(data));
    dispatch(setHomeLoading(false));

}




const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_HOME_DATA:
            return {
                ...state,
                banner:action.bannerData,
                cate:action.cateData,
                newGoods:action.newGoodsData
            }
        case SET_HOME_LOADING:
            return {
                ...state,
                loading:action.value
            }
        default:
            return state;
    }
}

export default reducer;