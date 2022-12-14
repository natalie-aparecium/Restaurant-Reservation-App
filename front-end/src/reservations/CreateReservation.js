import React, { useState } from "react";
import { useHistory } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationForm from "./ReservationForm";
import createReservation from "../utils/api";

function CreateReservation() {
    const initialFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [error, setError] = useState(null);
    const history = useHistory();
  
    const handleChange = ({ target }) => {
      const fieldValue = (target.id === 'people') ? target.valueAsNumber : target.value
      setFormData({
        ...formData,
        [target.name]: fieldValue, 
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const abortController = new AbortController();
      async function postRes() {
        try {
          await createReservation(formData, abortController.signal);
          history.push(`/dashboard?date=${formData.reservation_date}`);
        } catch (error) {
          setError(error);
        }
      }
      
      postRes();
      return () => abortController.abort(); 
    };
  
  
    const cancelHandler = () => {
      history.goBack();
    };
  
    return (
      <div>
        <h2 className="p-3 mb-3 bg-dark text-light d-flex justify-content-center">Create New Reservation</h2>
        <ErrorAlert error={error} />
        <ReservationForm 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          cancelHandler={cancelHandler}
          formData={formData}
        />
      </div>
    );
};
  
  
export default CreateReservation;
