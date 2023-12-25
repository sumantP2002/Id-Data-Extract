

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
    <>
      <div>
        <h1>All ID Cards</h1>

        {idCardsList.length > 0 ? (
          <ul>
            {idCardsList.map((idCard) => (
              <li key={idCard.identificationNumber}>
                <h2>ID Card Information</h2>
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
          <p>No ID cards available.</p>
        )}
      </div>
    </>
  );
};

export default DisplayOCR;
