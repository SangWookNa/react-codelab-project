import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './ActionTypes';
import axios from 'axios';
/*============================================================================
    user search
==============================================================================*/

/**SEARCH */
export function searchRequest(username) {
    return (dispatch) => {

        dispatch(search());

        let url = '/api/search';

        if (typeof username !== "undefined") {

            url = `${url}/${username}`;
        }

        return axios.get(url)
            .then((response) => {
                dispatch(searchSuccess(response.data));
            }).catch((error) => {
                dispatch(searchFailure());
            });
    };
}

export function search() {
    return {
        type: SEARCH
    };
}

export function searchSuccess(username) {
    return {
        type: SEARCH_SUCCESS,
        username
    };
}

export function searchFailure() {
    return {
        type: SEARCH_FAILURE
    };
}