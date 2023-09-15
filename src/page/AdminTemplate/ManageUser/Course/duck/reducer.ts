import { Action, AppState, AppStateAcount, DetailUser, RegistedCourse, Result, StateCourse } from "type/type";
import * as ActionTypes from "./constant";
const myState: StateCourse<RegistedCourse> = {
    registed: {

        loading: false,
        data: null,
        error: null,
    },
    waitting: {

        loading: false,
        data: null,
        error: null,
    }

}

const registedCourseReducer = (state = myState, action: Action) => {
    switch (action.type) {
        case ActionTypes.COURSE_REGISTED_REQUEST: {
            state.registed.loading = true;
            state.registed.data = null;
            state.registed.error = null;
            return { ...state }
        }

        case ActionTypes.COURSE_REGISTED_SUCCESS: {
            state.registed.loading = false;
            state.registed.data = action.payload;
            state.registed.error = null;
            return { ...state }
        }

        case ActionTypes.COURSE_REGISTED_FAIL: {
            state.registed.loading = false;
            state.registed.data = null;
            state.registed.error = action.payload;
            return { ...state }
        }
        case ActionTypes.COURSE_WAITTING_REQUEST: {
            state.waitting.loading = true;
            state.waitting.data = null;
            state.waitting.error = null;
            return { ...state }
        }

        case ActionTypes.COURSE_WAITTING_SUCCESS: {
            state.waitting.loading = false;
            state.waitting.data = action.payload;
            state.waitting.error = null;
            return { ...state }
        }

        case ActionTypes.COURSE_WAITTING_FAIL: {
            state.waitting.loading = false;
            state.waitting.data = null;
            state.waitting.error = action.payload;
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default registedCourseReducer;