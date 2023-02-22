import { CREATEBOOKING, DELETEBOOKING } from "./actionTypes";


const initialState = {
    // destination_from:'',
    // destination_to:'',
    // journey_date:'',
    // guests:'',
    // class_type:''
     data:[],
    count:0,
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEBOOKING:
            return {
                ...state,
                data:[
                    ...state.data,
                    action.payload
                ],
                count:state.count+1,
            };

        case DELETEBOOKING:
            let data = [state.data][0];
            // console.log(JSON.stringify(data));
            // console.log("payload : "+ action.payload)
            let tempArray =[]
            for(let info of data) {
               if(info.count != action.payload){
                tempArray.push(info);
                // console.log(info.count);
                
               }   
            }
            // console.log("#####################")
            return {
                ...state,
                data: [...tempArray],
                count:state.count-1,  
            };

        default:
            return state;
    }
};

export default bookingReducer;
