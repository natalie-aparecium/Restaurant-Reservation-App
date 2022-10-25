import React from "react";
import { useHistory } from "react-router-dom";
import { updateReservationStatus } from "../utils/api";

function ReservationList({ reservation }) {
    const {
      reservation_id,
      first_name,
      last_name,
      mobile_number,
      reservation_time,
      people,
      status,
    } = reservation;

    const history = useHistory();
    
    const handleCancel = (event) => {
      const userResponse = window.confirm("Do you want to cancel this reservation? This cannot be undone.");
      if (userResponse) {
        const abortController = new AbortController();
        async function update() {
          try {
            console.log("reservation id: ", reservation_id);
            await updateReservationStatus("cancelled", reservation_id, abortController.signal);
            history.push("/");
          } catch (error) {
            console.log(error);
          }
        }
  
        update();
      }
    };
    
    return (
      <div className="card col-sm-8 col-md-7 col-lg-6 m-auto">
        <div className="card-body">
          <h5 className="card-title ">{first_name} {last_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Phone Number: {mobile_number}</h6>
          <p className="card-text">Time: {reservation_time}</p>
          <p className="card-text">
            Party Size: {people}
          </p>
          <p data-reservation-id-status={reservation_id}>
            Status: {status}
          </p>
          {status === "booked" &&
            <>
              <a className="btn btn-outline-info" href={`/reservations/${reservation_id}/seat`}>
                Seat
              </a>
              <a className="btn btn-outline-warning mx-2" href={`/reservations/${reservation_id}/edit`}>
                Edit
              </a>
              <button className="btn btn-outline-secondary" onClick={handleCancel} data-reservation-id-cancel={reservation_id}>
                Cancel
              </button>
            </>
          }
        </div>
      </div>
    );
};
  
  
export default ReservationList;