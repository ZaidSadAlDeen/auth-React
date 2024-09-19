import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
export default function Login() {
    const formik =useFormik(
        {
            initialValues:{
                email:'',
                password:''
            },
            onSubmit:LoginUser,
            validate:values=>{
                let errors={};
                if(values.email.length<=10){
                    errors.email="email is requried";
                }
                if(values.password.length<=2){
                    errors.password="password is requried";
                }
                return errors;
            }

        }
    );

   async function  LoginUser(){
        const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values)
        console.log(data);
    }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={formik.handleSubmit}> 
    <div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' value={formik.email} placeholder="User Email" />
    <label htmlFor="email">User Email</label>
    {formik.touched.email && formik.errors.email? <div className='alert alert-danger'>{formik.errors.email}</div>:null}
  </div>

  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' value={formik.password} placeholder="Password" />
    <label htmlFor="password">Password</label>
    {formik.touched.password && formik.errors.password? <div className='alert alert-danger'>{formik.errors.password}</div>:null}
  </div>
 
  <button type='submit' className='btn btn-outline-info '>Register</button>
</div>

    </form>
    
    </>
  )
}
