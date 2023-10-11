"use client"
import React from "react";

const Student = (params) => {
   // console.log(params.params)
  return (
    <div>
      <h1>Student details</h1>
      <h2>Name:{params.params.student}</h2>
    
    </div>
  );
};

export default Student;