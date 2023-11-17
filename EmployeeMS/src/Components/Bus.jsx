import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Bus = () => {

    const [bus, setBus] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/bus')
        .then(result => {
            if(result.data.Status) {
                setBus(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_bus/'+id)
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
            <h3>Bus List</h3>
        </div>
        <Link to="/dashboard/add_bus" className='btn btn-success'>Add Bus</Link>
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Licence No.</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Total_Seat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bus.map(b => (
                            <tr>
                                <td>{b.licence}</td>
                                <td>{b.model}</td>
                                <td>{b.manufacturer}</td>
                                <td>{b.seat}</td>
                                <td>
                                <button
                                   className="btn btn-warning btn-sm"
                                   onClick={() => handleDelete(b.id)}
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

export default Bus