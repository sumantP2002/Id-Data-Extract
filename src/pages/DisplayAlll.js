import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayOCR = () => {
  const [idCardsList, setIdCardsList] = useState([]);

  const fetchAllIdCards = async () => {
    try {
      const response = await axios.get('/api/getall');
      console.log(response);
      setIdCardsList(response.data); // Assuming the data is an array of ID cards
    } catch (error) {
      console.error('Error fetching ID cards:', error);
    }
  };

  useEffect(() => {
    fetchAllIdCards();
  }, []); // Fetch data on component mount

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', fontFamily: 'Arial, sans-serif' }}>All ID Cards</h1>
      </div>

      {idCardsList.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {idCardsList.map((idCard) => (
            <li
              key={idCard.identificationNumber}
              style={{
                backgroundColor: '#fff',
                border: '2px solid #3498db',
                borderRadius: '5px',
                marginBottom: '20px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>ID Card Information</h2>
              <p>
                <strong>Name:</strong> {idCard.name}
              </p>
              <p>
                <strong>Last Name:</strong> {idCard.lastName}
              </p>
              <p>
                <strong>Date of Birth:</strong> {idCard.dateOfBirth}
              </p>
              <p>
                <strong>Date of Issue:</strong> {idCard.dateOfIssue}
              </p>
              <p>
                <strong>Date of Expiry:</strong> {idCard.dateOfExpiry}
              </p>
              <p>
                <strong>Identification Number:</strong> {idCard.identificationNumber}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.5em' }}>No ID cards available.</p>
      )}
    </div>
  );
};

export default DisplayOCR;
