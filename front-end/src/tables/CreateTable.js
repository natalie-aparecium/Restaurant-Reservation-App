import React, { useState } from "react";
import { useHistory } from "react-router";
import { createTable } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function CreateTable() {
    const initialFormState = {
        table_name: "",
        capacity: "",
    };

    const [ formData, setFormData ] = useState(initialFormState);
    const [ error, setError ] = useState(null);
    const history = useHistory();

    const handleChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.id === "capacity" ? target.valueAsNumber : target.value, 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postTable() {
          try {
            await createTable(formData);
            history.push("/dashboard");
          } catch(error) {
            setError(error);
          };
        };
    
        postTable();
    };

    const cancelHandler = () => {
        history.goBack();
    };

    return (
        <div>
          <h2 className="p-3 mb-3 bg-dark text-light d-flex justify-content-center">Create New Table</h2>
          <ErrorAlert error={error} />
          <div>
            <form onSubmit={handleSubmit} className="col-auto">
              <label htmlFor="table_name">
                Table Name
              </label>
              <input 
                id="table_name"
                type="text"
                className="form-control"
                name="table_name"
                onChange={handleChange}
                value={formData.table_name}
              />
              <br />
              <label htmlFor="capacity">
                Capacity
              </label>
              <input
                id="capacity"
                type="number"
                min="1"
                className="form-control"
                name="capacity"
                onChange={handleChange}
                value={formData.capacity}
              />
              <br />
              <div className="text-center">
                <button type="button" className="btn btn-outline-danger mb-4 mx-2" onClick={cancelHandler}>Cancel</button>
                <button type="submit" className="btn btn-outline-primary mb-4 mx-2">Submit</button> 
              </div>
            </form>
          </div>
        </div>
    );
};

export default CreateTable;