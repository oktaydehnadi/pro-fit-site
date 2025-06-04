import React from 'react';

export const Card = ({ children }) => (
  <div className="border rounded-2xl p-4 shadow-md bg-white">{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);
