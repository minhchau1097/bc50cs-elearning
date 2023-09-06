import { DETAIL_COURSE_REQUEST, DETAIL_COURSE_SUCCESS, DETAIL_COURSE_FAIL } from "./contants";


const initialState = {
    loading: false,
     data:null,
     error: null,
};

const detaiProductReducer = (state=initialState , action:any)=>{
    switch (action.type) {
        case DETAIL_COURSE_REQUEST:{
            state.loading =true;
            state.data = null;
            state.error = null;
            return {...state};
        }

        case DETAIL_COURSE_SUCCESS:{
            state.loading =false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        }

        case DETAIL_COURSE_FAIL:{
            state.loading =false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        }


        default:
            return {...state}
    }
};

export default detaiProductReducer;
