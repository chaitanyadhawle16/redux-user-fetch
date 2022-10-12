import { fetchItems, fetchItemsSuccess, fetchItemsFail, setLoading} from "./actions";


export const fetchData = (page=1) =>{
    return dispatch => {
        
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then(response => response.json())
        .then(data => dispatch(fetchItemsSuccess(data)))
        .catch(err => dispatch(fetchItemsFail(err)));

        dispatch(setLoading(false));
    };
 }