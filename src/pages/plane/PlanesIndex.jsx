import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanesIndex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:3000/airplanes.json"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Planes Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rows</th>
            <th>Columns</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.rows}</td>
              <td>{item.columns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanesIndex;
