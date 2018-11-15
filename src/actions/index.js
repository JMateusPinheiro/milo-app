//Page
export const IMCREMENT_PAGE = 'IMCREMENT_PAGE'
export const imcrementPage = page => ({
    type: IMCREMENT_PAGE,
    imcrement: page
});


//Loading
export const SET_LOADING = 'SET_LOADING'
export const setLoading = loading => ({
    type: SET_LOADING,
    loading: loading
})

//Datas
export const SET_DATAS = 'SET_DATAS'
export const setDatas = datas => ({
    type: SET_DATAS,
    datas: datas
})

//PageDatas
export const SET_PAGE_DATAS = 'SET_PAGE_DATAS'
export const setPageDatas = pageDatas => ({
    type: SET_PAGE_DATAS,
    pageDatas: pageDatas
})