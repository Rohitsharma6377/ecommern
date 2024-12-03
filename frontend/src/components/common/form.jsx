import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Input } from '../ui/input';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '../ui/select';
import { Button } from '../ui/button';

const Commonform = ({ registerFormControls = [], formData, setFormData, onSubmit, buttonText }) => {
    // Function to render form elements dynamically based on `componentType`
    function renderInputsByComponentType(getControlItem) {
      let element = null;
      const value = formData[getControlItem.name] || '';
  
      switch (getControlItem.componentType.toLowerCase()) {
        case 'input': // Render input field
          element = (
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
          );
          break;
  
        case 'select': // Render select dropdown
          element = (
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: value,
                })
              }
              value={value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {getControlItem.options && getControlItem.options.length > 0 ? (
                  getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem disabled>No options available</SelectItem>
                )}
              </SelectContent>
            </Select>
          );
          break;
  
        case 'textarea': // Render textarea field
          element = (
            <textarea
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.id}
              className="w-full border rounded p-2"
              rows="4"
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
          );
          break;
  
        default: // Default to input field
          element = (
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.id}
              type={getControlItem.type}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
          );
          break;
      }
  
      return element;
    }
  
    return (
      <form className="space-y-6" onSubmit={onSubmit}>
        {/* Guard Clause for Empty Controls */}
        {registerFormControls.length > 0 ? (
          <div className="flex flex-col gap-3">
            {registerFormControls.map((getControlItem) => (
              <div className="grid w-full gap-5">
                <Label className="mb-1">
                  {getControlItem.label}
                </Label>
                {renderInputsByComponentType(getControlItem)}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">No form controls available.</p>
        )}
        <Button type="submit" className="mt-2 w-full">
          {buttonText || 'Submit'}
        </Button>
      </form>
    );
  };
  
  export default Commonform;  