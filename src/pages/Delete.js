import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DeleteOCR = () => {
  const navigate = useNavigate();
  const [identificationNumberToDelete, setIdentificationNumberToDelete] = useState('');

  const handleDelete = async () => {
    try {
      // Make a DELETE request to the backend API endpoint
      const response = await axios.delete(`/api/delete-ocr/${identificationNumberToDelete}`);
      
      // Check the response and handle accordingly
      if (response.data.success) {
        
        console.log('OCR data deleted successfully');
        toast.success('OCR data deleted successfully');
        
        // Navigate to the homepage after successful deletion
        navigate('/');
      } else {
        console.log('OCR data not found');
      }
    } catch (error) {
      console.error('Error deleting OCR data:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', fontFamily: 'Arial, sans-serif' }}>Delete OCR Data</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
        <label style={{ fontSize: '1.5em', marginBottom: '10px' }}>Enter Identification Number to delete:</label>
        <input
          type="text"
          value={identificationNumberToDelete}
          onChange={(e) => setIdentificationNumberToDelete(e.target.value)}
          style={{ padding: '10px', fontSize: '1.2em', marginBottom: '20px' }}
        />
        <button
          onClick={handleDelete}
          style={{
            borderRadius: '15px',
            backgroundColor: '#e74c3c', // Red color
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.5em',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteOCR;
