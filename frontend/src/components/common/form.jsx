import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CommonForm = ({ registerFormControls, formData, setFormData, onSubmit, buttonText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // update the field by name
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {registerFormControls.map((control) => (
        <div key={control.name} className="mb-4">
          <label htmlFor={control.name} className="block text-sm font-medium text-gray-700">
            {control.label}
          </label>
          <input
            id={control.name}
            name={control.name} // Important to match field names here
            type={control.type}
            placeholder={control.placeholder}
            value={formData[control.name]} // bind value from formData
            onChange={handleChange} // update formData on input change
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {buttonText}
      </button>
    </form>
  );
};

export default CommonForm;
