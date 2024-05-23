import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddServices = () => {
  const [services, setServices] = useState({
    coach: "",
    source: "",
    destination: "",
    departure_time: "",
    price:"",
    total_seat:""
  });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/auth/add_services',services)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/services')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Add Services</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputCoach" className="form-label">
                  Coach
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="coach"
                  placeholder="Enter Coach"
                  onChange={(e) =>
                    setServices({ ...services, coach: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputSource" className="form-label">
                  Source
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="source"
                  placeholder="Enter Source Place"
                  autoComplete="off"
                  onChange={(e) =>
                    setServices({ ...services, source: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputDestination" className="form-label">
                  Destination
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="destination"
                  placeholder="Enter Destination Place"
                  onChange={(e) =>
                    setServices({ ...services, destination: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputDepartureTime" className="form-label">
                  Departure Time
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="departure_time"
                  placeholder="Enter Departure Time"
                  onChange={(e) =>
                    setServices({ ...services, departure_time: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPrice" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="price"
                  placeholder="Enter Price"
                  onChange={(e) =>
                    setServices({ ...services, price: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputTotalSeat" className="form-label">
                  Total Seat
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="total_seat"
                  placeholder="Enter Total No. of Seat"
                  onChange={(e) =>
                    setServices({ ...services, total_seat: e.target.value })
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

export default AddServices