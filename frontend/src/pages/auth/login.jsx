import Commonform from '@/components/common/form';
import { loginFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

function onSubmit(event) {
  event.preventDefault();
  // Add your form submission logic here
}

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1>Sign In</h1>
        <p>
          Don't have an Account?{' '}
          <Link to="/auth/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
      <Commonform
        registerFormControls={loginFormControls} // Change to registerFormControls
        buttonText="Sign In"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
