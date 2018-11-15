export const IMCREMENT_PAGE = 'IMCREMENT_PAGE'
export const imcrementPage = page => ({
    type: IMCREMENT_PAGE,
    imcrement: page + 10
});

export const IS_LOADING = 'IS_LOADING';
export const isLoading = () =>{
    type: IS_LOADING
}

export const SET_LOADING = 'SET_LOADING'
export const setLoading = loading =>{
    type: SET_LOADING,
    loading
}