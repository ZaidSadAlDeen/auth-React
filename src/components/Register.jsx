import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
export default function Register() {
    const formik =useFormik(
        {
            initialValues:{
                userName:'',
                email:'',
                password:''
            },
            onSubmit:RegisterUser

        }
    );

   async function  RegisterUser(){
        const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values)
        console.log(data);
    }
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={formik.handleSubmit}> 
    <div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="name" onChange={formik.handleChange} name='userName' value={formik.userName} placeholder="User Name" />
    <label htmlFor="name">User Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" onChange={formik.handleChange} name='email' value={formik.email} placeholder="User Email" />
    <label htmlFor="email">User Email</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="password" onChange={formik.handleChange} name='password' value={formik.password} placeholder="Password" />
    <label htmlFor="password">Password</label>
  </div>
  <button type='submit' className='btn btn-outline-info my-3'>Register</button>
</div>

    </form>
    
    </>
  )
}
