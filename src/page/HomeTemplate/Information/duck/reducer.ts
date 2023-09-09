import { Action, AppState, AppStateAcount, DetailUser, Result } from "type/type";
import * as ActionTypes from "./constant";
const myState:AppStateAcount<DetailUser> = {
    loading: false,
    data: null,
    error: null,

}

const detailUserReducer = (state = myState, action: Action) => {
    switch (action.type) {
        case ActionTypes.DETAIL_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case ActionTypes.DETAIL_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case ActionTypes.DETAIL_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default detailUserReducer;