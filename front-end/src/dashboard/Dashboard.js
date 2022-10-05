import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { useHistory } from "react-router";
import useQuery from "../utils/useQuery";
import { previous, today, next } from "../utils/date-time";
import ReservationList from "./ReservationList";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ forceRerender, setForceRerender }) {

  const query = useQuery();
  //const history = useHistory();

  const [date, setDate] = useState(query.get("date") || today());
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  const handleChange = ({ target }) => {
    setDate(target.value);
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-dark" onClick={() => setDate(previous(date))}>Previous</button>
        <button type="button" className="btn btn-outline-dark mx-2" onClick={() => setDate(today())}>Today</button>
        <button type="button" className="btn btn-outline-dark" onClick={() => setDate(next(date))}>Next</button>
      </div>
      <br/>
      <label htmlFor="reservation_date" className="d-flex justify-content-center">
        <input
          id="reservation_date"
          name="reservation_date"
          type="date"
          value={date}
          onChange={handleChange}
        />
      </label>
      <br/>
      <ErrorAlert error={reservationsError} />
      <div>
        <div className="d-md-flex mb-3 d-flex justify-content-center">
          {reservations.length ? <h5 className="text-info">Reservations</h5> : `There are no reservations for ${date}.`}
        </div>
        {reservations.map((reservation) => (
          <ReservationList key={reservation.reservation_id} reservation={reservation} />
        ))}
      </div>
      <br />
    </main>
  );
}

export default Dashboard;
