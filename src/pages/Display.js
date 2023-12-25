import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayOCR = () => {
  const [identificationNumberToDisplay, setIdentificationNumberToDisplay] = useState('');
  const [idCards, setIdCards] = useState(null);
  
  const fetchIdCards = async () => {
    try {
      const response = await axios.get(`/api/display-ocr/${identificationNumberToDisplay}`);
      console.log(response.data.ocrData);
      setIdCards(response.data.ocrData);
    } catch (error) {
      console.error('Error fetching ID cards:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', fontFamily: 'Arial, sans-serif' }}>
          ID Card Display
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
        <label style={{ fontSize: '1.5em', marginBottom: '10px' }}>Enter Identification Number to display:</label>
        <input
          type="text"
          value={identificationNumberToDisplay}
          onChange={(e) => setIdentificationNumberToDisplay(e.target.value)}
          style={{ padding: '10px', fontSize: '1.2em', marginBottom: '20px' }}
        />
        <button
          onClick={fetchIdCards}
          style={{
            borderRadius: '15px',
            backgroundColor: '#3498db',
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.5em',
            cursor: 'pointer',
          }}
        >
          Display
        </button>
      </div>

      {idCards && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ecf0f1',
              padding: '30px',
              borderRadius: '15px',
              width: '500px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>ID Card Information</h2>
            <div style={{ marginBottom: '20px' }}>
              <strong>Name:</strong> {idCards.name}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Last Name:</strong> {idCards.lastName}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Date of Birth:</strong> {idCards.dateOfBirth}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Date of Issue:</strong> {idCards.dateOfIssue}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Date of Expiry:</strong> {idCards.dateOfExpiry}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Identification Number:</strong> {idCards.identificationNumber}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayOCR;
