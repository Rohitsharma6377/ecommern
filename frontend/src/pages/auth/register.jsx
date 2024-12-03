import Commonform from '@/components/common/form';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const initialState = {
  userName : '',
  email :"",
  password: "",
}
const AuthRegister = () => {

  const [formData , setFormData] = useState(initialState)
  return (
    <div className='mx-auto w-full max-w-md space-y-6'> 
      <div className="text-center">
        <h1>Sign Up</h1>
        <p>Already have an account
<Link to='/auth/login'>Login</Link>
        </p>
      </div>
      <Commonform formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default AuthRegister;
