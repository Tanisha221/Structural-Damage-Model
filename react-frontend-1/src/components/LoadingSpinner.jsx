// LoadingSpinner.jsx

import React from "react";

function LoadingSpinner() {
  return(
    <button className="btn btn-active btn-primary rounded-lg text-warning" >
    <span className="loading loading-infinity text-warning loading-xl"></span>Loading...
  </button>
  )
  
}

export default LoadingSpinner;
