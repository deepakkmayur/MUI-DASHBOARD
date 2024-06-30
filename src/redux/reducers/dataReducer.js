import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,DELETE_ROW,SELECT_ROW } from "../constants";

const initialState = {
  isLoading:false,
  error:null,
  data: [],
  selectedData:JSON.stringify(localStorage.getItem("selectedRows")) || [],
};

export const dataReducer = (state = initialState, action) => {
  console.log(action,"reducer data");
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading:true
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading:false
      };

      case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:action.payload
      };
      
      case DELETE_ROW:
        return{
          ...state,data:state?.data.filter((item)=>{
          //  const fun=(item)=>{
          //   return ...state,
          //  }
          //  selectedData:fun(item)
            return item.id!==action.payload
          })
        }
        
        // case SELECT_ROW:
        //   return{
        //     ...state,selectedData:action.payload
        //   }

    default:
      return state;
  }
};
