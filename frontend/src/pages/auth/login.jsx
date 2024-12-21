import CommonForm from '@/components/common/form';
import { loginFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors
    setLoading(true);
    try {
      // Replace with actual API call logic
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle successful login, e.g., redirect or update state
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>

      {error && (
        <div className="p-4 text-red-500 bg-red-100 rounded">
          {error}
        </div>
      )}

      <CommonForm
        registerFormControls={loginFormControls}
        buttonText={loading ? 'Signing In...' : 'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="text-center text-gray-500">
        <Link to="/auth/forgot-password" className="text-blue-500 underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default AuthLogin;
