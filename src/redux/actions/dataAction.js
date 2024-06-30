import { getData } from '../../api/apiServices';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DELETE_ROW, SELECT_ROW } from "../constants"


const fetchDataRequest = () => ({
   type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
   type: FETCH_DATA_SUCCESS,
   payload: data,
});

const fetchDataFailure = (error) => ({
   type: FETCH_DATA_FAILURE,
   payload: error,
});

const deleteRow = (id) => {
   return {
      type: DELETE_ROW,
      payload: id
   }
}

const selectRow = (selectedRowData) => {
   return {
      type: SELECT_ROW,
      payload: selectedRowData
   }
}


export const fetchData = () => {
   return async (dispatch) => {
      dispatch(fetchDataRequest());
      try {
         const data = await getData();
         dispatch(fetchDataSuccess(data));
      } catch (error) {
         dispatch(fetchDataFailure(error));
      }
   }
};



export const deleteRowData = (id) => {
   return async (dispatch, getState) => {
      dispatch(deleteRow(id));
      const state = JSON.parse(localStorage.getItem("selectedRows"))
       if(state){
         const updatedSelectedData = state.filter((row) => {
            return row.id !== id
         });
         localStorage.setItem("selectedRows",JSON.stringify(updatedSelectedData))
         // console.log(JSON.parse(localStorage.getItem("selectedRows")),"------");
       }
   };
};




export const selectRowData = (id) => {
   return async (dispatch, getState) => {
      const state = getState();
      const selectedRowData = state?.data?.data.find((row) => {
         return row.id === id
      });
      const previousSelectedRows = JSON.parse(localStorage.getItem('selectedRows'))
      if (!previousSelectedRows) {
         localStorage.setItem("selectedRows", JSON.stringify([selectedRowData]))
      } else {
         const exists = previousSelectedRows?.some(row => row.id === selectedRowData.id);
         if (!exists) {
            const updatedSelectedRows = [...previousSelectedRows, selectedRowData];
            localStorage.setItem("selectedRows", JSON.stringify(updatedSelectedRows));
         } else {
            console.log("selectedRow Already exists--------");
         }
      }
      // console.log(JSON.parse(localStorage.getItem("selectedRows")),"selectedRows");
      //   localStorage.clear()
   };
};







