import Commonform from '@/components/common/form';
import { registerFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  userName: '',
  email: '',
  password: '',
};

function onSubmit(event) {
  event.preventDefault();
  // Add your form submission logic here
}

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);

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
