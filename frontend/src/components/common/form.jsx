import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Input } from '../ui/input';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '../ui/select';
import { Button } from '../ui/button';

const Commonform = ({ registerFormControls, formData, setFormData, onSubmit, buttonText }) => {
  const formControls = registerFormControls || [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((control, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={control.name} className="block text-sm font-medium">
            {control.label}
          </label>
          <input
            id={control.name}
            name={control.name}
            type={control.type}
            placeholder={control.palceholder}
            value={formData[control.name] || ''}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {buttonText}
      </button>
    </form>
  );
};

export default Commonform;
