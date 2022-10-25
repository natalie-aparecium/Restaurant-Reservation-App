import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchReservations } from "../utils/api";
import ReservationList from "../dashboard/ReservationList";
import ErrorAlert from "../layout/ErrorAlert";

function Search() {
    const initialFormState = {
        mobile_number: ""
    };
    
    const [formData, setFormData] = useState(initialFormState);
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    const history = useHistory();
    
    const handleChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        async function findReservations() {
          try {
            const matchingReservations = await searchReservations(formData.mobile_number, abortController.signal);
            setReservations(matchingReservations);
          } catch(error) {
            setError(error);
          };
        };
    
        findReservations();
        return () => abortController.abort();
    };
    
    const cancelHandler = () => {
        history.goBack();
    };
      
    return (
        <div>
          <h1 className="p-3 mb-3 bg-dark text-light d-flex justify-content-center">Search Reservation</h1>
          <ErrorAlert error={error} />
          <form onSubmit={handleSubmit} className="col-auto">
            <label htmlFor="mobile_number">
              Mobile Number:
            </label>
            <input
              name="mobile_number" 
              id="mobile_number"
              type="text"
              placeholder="xxx-xxx-xxxx"
              className="form-control"
              onChange={handleChange}
              value={formData.mobile_number}
            />
            <br />
            <div className="text-center">
              <button type="button" className="btn btn-outline-danger mb-4 mx-2" onClick={cancelHandler}>Cancel</button>
              <button type="submit" className="btn btn-outline-primary mb-4 mx-2">Find</button>
            </div>
            <br />
            {reservations.length ? <h5 className="text-secondary border-bottom border-dark">Reservations Found</h5> : <p>No reservations found</p>}
            {reservations && reservations.map((reservation) => (
              <ReservationList key={reservation.reservation_id} reservation={reservation} />
            ))}
          </form>
        </div>
    );
};

export default Search;