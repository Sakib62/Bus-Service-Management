import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBus = () => {
  const [bus, setBus] = useState({
    licence: "",
    model: "",
    manufacturer: "",
    seat: "",
  });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/auth/add_bus',bus)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/bus')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Add Bus</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputLicence" className="form-label">
                  Licence No
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="licence"
                  placeholder="Enter Licence No."
                  onChange={(e) =>
                    setBus({ ...bus, licence: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputModel" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="model"
                  placeholder="Enter Model Name"
                  autoComplete="off"
                  onChange={(e) =>
                    setBus({ ...bus, model: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputManufacturer" className="form-label">
                  Manufacturer
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="manufacturer"
                  placeholder="Enter Manufacturer Name"
                  onChange={(e) =>
                    setBus({ ...bus, manufacturer: e.target.value })
                  }
                />
                <label htmlFor="inputSeat" className="form-label">
                  Total Seat
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="seat"
                  placeholder="Enter Total Seat NO"
                  autoComplete="off"
                  onChange={(e) =>
                    setBus({ ...bus, seat: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Add Bus
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default AddBus