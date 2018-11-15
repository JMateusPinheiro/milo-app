import { IS_LOADING, SET_LOADING } from '../actions'

const loadingReducer = (state = false, action) => {
    switch(action.type){
        case SET_LOADING:
            return action.loading;
        default:
            return state;
    }
}
export default loadingReducer