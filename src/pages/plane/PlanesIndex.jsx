import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import NavbarBootStrap from "../../common/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <NavbarBootStrap />
      <h1>Planes Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rows</th>
            <th>Columns</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name} || 'A310</td>
              <td>{item.rows} || 'A'</td>
              <td>{item.columns} || '2'</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PlanesIndex;
