import { CREATEBOOKING, DELETEBOOKING } from "./actionTypes";

export const createBooking = (destination_from,destination_to,journey_date,guests,class_type)=> {
  return {
    type: CREATEBOOKING,
    destination_from: destination_from,
    destination_to: destination_to,
    journey_date: journey_date,
    guests: guests,
    class_type: class_type,
  };
};

export const deleteBooking = () => {
  return {
    type: DELETEBOOKING,
  };
};
