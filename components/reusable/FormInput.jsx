// components/reusable/FormInput.jsx
import React from 'react';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  value,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={labelFor}
        className="block text-lg text-primary-dark dark:text-primary-light mb-2"
      >
        {inputLabel}
      </label>
      <input
        id={inputId}
        name={inputName} // ✅ This is critical for capturing form data
        type={inputType}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
      />
    </div>
  );
};

export default FormInput;
