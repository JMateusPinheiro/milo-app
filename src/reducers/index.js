import {combineReducers} from 'redux';

import pageReducer from './pageReducer'
import loadingReducer from './loadingReducer'
import datasReducer from './datasReducer'
import pageDatasReducer from './pageDatasReducer'

const rootReducer = combineReducers({
    page: pageReducer,
    loading: loadingReducer,
    datas: datasReducer,
    pageDatas: pageDatasReducer
})

export default rootReducer