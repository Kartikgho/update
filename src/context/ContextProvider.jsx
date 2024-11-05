import React, { useState, useEffect } from "react";
import ShowContext from "./ShowContext.js";
import { getSiteData } from "../firebase/config.js";

const ShowContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getSiteData();
        setSiteData(data.siteData); // Make sure `SiteData` exists in the Firebase response
        console.log("Data from Firebase:", data.siteData); // Log data here after it is fetched
      } catch (error) {
        console.error("Error fetching site data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <ShowContext.Provider value={{ siteData }}>
      {children}
    </ShowContext.Provider>
  );
};

export default ShowContextProvider;
