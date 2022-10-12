const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
const FETCH_ITEMS_FAIL = "FETCH_ITEMS_FAIL";
const SET_PAGE = "SET_PAGE";
const SET_LOADING = "SET_LOADING";

function fetchItemsSuccess(item) {
    return {
        type : FETCH_ITEMS_SUCCESS,
        payload : item
    };
}

function fetchItemsFail(err){
    return {
        type : FETCH_ITEMS_FAIL,
        payload : {err}
    };
}

function setPage(page){
    return {
        type : SET_PAGE,
        payload : page
    };
}

function setLoading(flag){
    return {
        type : SET_LOADING,
        payload : flag
    };
}

export {fetchItemsFail, setPage, fetchItemsSuccess, setLoading};
