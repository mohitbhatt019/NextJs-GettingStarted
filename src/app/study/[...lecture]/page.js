"use client";
import React from "react";

const Lecture = ({ params }) => {
 // console.log(params);
  return (
    <div>
      {" "}
      <h1>Lecture1 of college:{params.lecture[0]}</h1>
      <h2>Lecture1 of college:{params.lecture[1]}</h2>
    </div>
  );
};

export default Lecture;
