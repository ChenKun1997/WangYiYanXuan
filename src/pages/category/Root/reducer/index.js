import {http,api} from '../../../../http';


const SET_CATE_LIST_DATA = 'cate/setListDataById';
const SET_LIST_LOADING = 'cate/setListLoading';

const initalState = {
    menuListData: {},
    loading:false
}

//同步任务
const setListDataById = ({id,list})=>({
    type:SET_CATE_LIST_DATA,
    id:id,
    list: list
})

const setListLoading = (value) => ({
    type:SET_LIST_LOADING,
    value
})

// 异步任务
export const requestListDataById = (id) => async (dispatch) => {
    dispatch(setListLoading(true));
    const result = await http.get(api.CATE_LIST_API,{id});
    dispatch(setListDataById({id,list:result.listData}));
    dispatch(setListLoading(false));
}


export default (state = initalState, action) => {
    switch (action.type) {
        case SET_CATE_LIST_DATA:
            return {
                ...state,
                menuListData:{
                    ...state.menuListData,
                    [action.id]:action.list
                }
            }
            case SET_LIST_LOADING:
                return {
                    ...state,
                    loading:action.value
                }
            
        default:
            return state;
    }
};