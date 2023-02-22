import { CREATEBOOKING, DELETEBOOKING } from "./actionTypes";

export const createBooking = (data)=> {
  return {
    type: CREATEBOOKING,
    payload:data,
  };
};

export const deleteBooking = (data) => {
  return {
    type: DELETEBOOKING,
    payload:data,
  };
};
