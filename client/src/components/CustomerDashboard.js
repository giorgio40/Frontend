import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export default function CustomerDashboard() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/classes"
      )
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Get Classes Failure ==>> ", err.message);
      });
  }, []);

  return (
    <div>
      {/* map over classes and render Class component for each one */}
      {/* needs an input element for search input with onChange handler;
          this couold be a separate search component */}
      {/* map over availableClasses and render Class component for each one */}
      {/* needs to be an element with click listener that sends put request to api
            to cancel isAttending(might conflate this and below elements to one toggle) */}
      {/* also need an element with click listener that sends put request to api
            to confirm isAttending(might conflate this and above elements to one toggle) */}
      {/* also might need a clear search that sends action to reducer to refetch
          classlist */}
    </div>
  );
}
