import {SET_PAGE_DATAS} from '../actions'

const pageDatasReducer = (state = [], action) => {
    switch(action.type){
        case SET_PAGE_DATAS:
            return [...state, ...action.pageDatas];
        default:
            return state;
    }
}
export default pageDatasReducer