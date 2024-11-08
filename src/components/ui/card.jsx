import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent };
