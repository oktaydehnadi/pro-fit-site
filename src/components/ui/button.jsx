import React from 'react';

export const Button = ({ children, className }) => {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl shadow ${className}`}>
      {children}
    </button>
  );
};
