import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const CreatenewOCR = () => {
  const navigate = useNavigate();
  const [idcard, setidcard] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handlecreate = async (e) => {
    e.preventDefault();
    try {
      const IdcardData = new FormData();
      IdcardData.append('idcard', idcard);
      const { data } = await axios.post('/api/create-ocr', IdcardData);

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success('OCR Created Successfully');
        setResponseData(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', fontFamily: 'Arial, sans-serif' }}>Upload your Thai ID Card</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            border: '2px solid #3498db',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '400px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <label className="btn btn-outline-secondary col-md-12">
            {idcard ? idcard.name : 'Upload Photo'}
            <input
              type="file"
              name="idcard"
              onChange={(e) => setidcard(e.target.files[0])}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          onClick={handlecreate}
          style={{
            borderRadius: '15px',
            backgroundColor: '#3498db',
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.5em',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </div>

      {responseData && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ecf0f1',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>DATA EXTRACTED</p>
            <div style={{ marginBottom: '10px' }}>
              <strong>Identification Number:</strong> {responseData.identificationNumber}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {responseData.name}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Last Name:</strong> {responseData.lastName}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Date of Birth:</strong> {responseData.dateOfBirth}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Date of Issue:</strong> {responseData.dateOfIssue}
            </div>
            <div>
              <strong>Date of Expiry:</strong> {responseData.dateOfExpiry}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatenewOCR;
