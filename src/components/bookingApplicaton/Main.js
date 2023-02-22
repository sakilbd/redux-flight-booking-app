import React, { useState } from "react";
import "./styles.css";
import logo from "./img/lws-logo.svg";
import TableRow from "./TableRow";
import { createBooking} from "../../redux/bookingApp/actions";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  let [component, setComponent] = useState({
    comps: [],
  });

  const data = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();

  let bookCounter = 1;
  const createBookingHandler = (formData) => {
    bookCounter++;
    console.log(bookCounter);
    dispatch(createBooking(formData));
  };


  const addComponent = (data) => {
    setComponent({
      comps: [...component.comps, <TableRow info={data} />],
    });
  };

  return (
    <div>
      <header id="header">
        <div class="container">
          <img src={logo} alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
          <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form class="first-hero lws-inputform">
              {/* <!-- From --> */}
              <div class="des-from">
                <p>Destination From</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div class="des-from">
                <p>Destination To</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div class="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  class="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                />
              </div>

              {/* <!-- Guests --> */}
              <div class="des-from">
                <p>Guests</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div class="des-from !border-r-0">
                <p>Class</p>
                <div class="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button class="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span
                  class="text-sm"
                  onClick={() => {
                    addComponent(data);
                    createBookingHandler({
                        count:data.count,
                      destination_from: "Barishal",
                      destination_to: "Saidpur",
                      journey_date: "1-2-2023",
                      guests: "2",
                      class_type: "business",
                    });
                    
                  }}
                >
                  Book
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div class="table-container">
          <table class="booking-table">
            <thead class="bg-gray-100/50">
              <tr class="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th class="text-center">Journey Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Class</th>
                <th class="text-center">Delete</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
              {/* <!-- Row 1 --> */}
              {/* <TableRow key="0" info={data.destination_to}/> */}
              {/* {component.comps} */}
              {data.data.map((item,i)=>{
                return (
                    <>
                    <TableRow key={i} bookInfo={item}/>
                    </>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Main;
