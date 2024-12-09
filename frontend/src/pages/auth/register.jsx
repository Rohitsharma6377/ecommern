import Commonform from '@/components/common/form';
import { registerFormControls } from '@/config';
import { registerUserAction } from '@/store/auth-slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  userName: '',
  email: '',
  password: '',
};


const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Use formData to get the values for email, password, and userName
    const { email, password, userName } = formData;

    // Dispatch the action with formData
    dispatch(registerUserAction({ email, password, userName }));

    // Optionally, navigate to another page after registration (e.g., to login)
    navigate('/auth/login');
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1>Sign Up</h1>
        <p>
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
      <Commonform
        registerFormControls={registerFormControls}
        buttonText="Create Account"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
