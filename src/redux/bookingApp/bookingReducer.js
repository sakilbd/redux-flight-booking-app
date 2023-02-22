import { CREATEBOOKING, DELETEBOOKING } from "./actionTypes";


const initialState = {
    destination_from:'',
    destination_to:'',
    journey_date:'',
    guests:'',
    class_type:''
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEBOOKING:
            return {
                ...state,
                destination_from: action.destination_from,
                destination_to: action.destination_to,
                journey_date: action.journey_date,
                guests: action.guests,
                class_type: action.class_type,
            };

        case DELETEBOOKING:
            return {
                ...state,
                
            };

        default:
            return state;
    }
};

export default bookingReducer;
