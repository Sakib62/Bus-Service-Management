import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Services = () => {

    const [services, setServices] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/services')
        .then(result => {
            if(result.data.Status) {
                setServices(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (coach) => {
        axios.delete('http://localhost:3000/auth/delete_services/'+coach)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      } 

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Services List</h3>
        </div>
        <Link to="/dashboard/add_services" className='btn btn-success'>Add Services</Link>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Coach</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Price Of Ticket</th>
                        <th>Total Seat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(s => (
                            <tr>
                                <td>{s.coach}</td>
                                <td>{s.source}</td>
                                <td>{s.destination}</td>
                                <td>{s.departure_time}</td>
                                <td>{s.price}</td>
                                <td>{s.total_seat}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(s.coach)}
                                >
                                Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Services