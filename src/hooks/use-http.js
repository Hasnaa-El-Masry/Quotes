import { useCallback, useReducer } from "react"
import { toast } from "react-toastify"

const httpReducer = (state, action) => {

    if (action.type === 'SEND') {
        return {
            error: null,
            data: null,
            status: 'pending'
        }
    }

    if (action.type === 'SUCCESS') {

        return {
            error: null,
            data: action.responseData,
            status: 'completed'
        }
    }

    if (action.type === 'ERROR') {
        return {
            error: action.errorMessage,
            data: null,
            status: 'completed'
        }
    }

    return state;
}

export const useHttp = (requestFunction, startWithPending = false) => {

    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : false,
        error: null,
        data: null
    });

    const sendRequest = useCallback(async (requestData) => {
        
        dispatch({ type: 'SEND' });

        try {

            const responseData = await requestFunction(requestData);
            dispatch({ type: 'SUCCESS', responseData });

        } catch (error) {

            dispatch({
                type: 'ERROR',
                errorMessage: error.message || 'Something went wrong!'
            });

        }

    }, [requestFunction]);

    return { sendRequest, ...httpState }
}