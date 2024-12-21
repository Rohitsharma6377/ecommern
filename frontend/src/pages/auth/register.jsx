import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CommonForm from '@/components/common/form';
import { registerFormControls } from '@/config';
import { registerUserAction } from '@/store/auth-slice';

const initialState = {
  userName: '',
  email: '',
  password: '',
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    // Check if all fields are filled and if passwords match
    if (!formData.userName || !formData.email || !formData.password ) {
      setError('All fields are required');
      return false;
    }
    setError(null); // Clear errors if validation passes
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const { email, password, userName } = formData;

    try {
      await dispatch(registerUserAction({ email, password, userName })).unwrap();
      setLoading(false);
      navigate('/auth/login'); // Redirect after successful registration
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

      {error && (
        <div className="p-4 text-red-500 bg-red-100 rounded">
          {error}
        </div>
      )}

      <CommonForm
        registerFormControls={registerFormControls}
        buttonText={loading ? 'Creating Account...' : 'Create Account'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};


export default AuthRegister;
