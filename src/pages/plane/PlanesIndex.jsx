import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import NavbarBootStrap from "../../common/NavBar";
import FooterStrap from "../../common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
      <Button variant="success" href="http://localhost:3000/airplanes">Create Planes</Button>{' '}
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
              <td></td>
              <td>{item.name}</td>
              <td>{item.rows}</td>
              <td>{item.columns}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FooterStrap />
    </div>
  );
};

export default PlanesIndex;
