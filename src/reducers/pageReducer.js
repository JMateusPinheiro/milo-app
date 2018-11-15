import {IMCREMENT_PAGE} from '../actions'

const pageReducer = (state = 0, action) => {
    switch(action.type){
        case IMCREMENT_PAGE:
            return state + 10;
        default:
            return state;
    }
}
export default pageReducer