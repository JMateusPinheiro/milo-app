import {SET_DATAS} from '../actions'

const datasReducer = (state = [], action) => {
    switch(action.type){
        case SET_DATAS:
            return action.datas;
        default:
            return state;
    }
}
export default datasReducer