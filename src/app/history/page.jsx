'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}project/submission/history/${id}`
        );
        setProjects(response.data.data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Replace 'yourIdValue' with the actual ID you want to fetch
    fetchData('id');
  }, []); 

  return (
    <div className="">

      {projects.map((project) => (
        <div key={project.id}>
  
          <p>Name: {project.name}</p>
          <p>Village: {project.village}</p>
          <p>Address: {project.address}</p>
          <p>Reason: {project.reason}</p>
     
        </div>
      ))}
    </div>
  );
};

export default History;
