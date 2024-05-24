import React, { useState,useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/dashboard')
        // axios.post('http://localhost:3000/auth/adminlogin', values)
        // .then(result => {
        //     if(result.data.loginStatus) {
        //         localStorage.setItem("valid", true)
        //         navigate('/dashboard')
        //     } else {
        //         setError(result.data.Error)
        //     }
        // })
        // .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'>
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login