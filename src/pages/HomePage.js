import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const buttonStyles = {
    backgroundColor: '#3498db', // Professional blue color
    color: '#fff',
    padding: '15px',
    fontSize: '1.5em',
    margin: '10px',
    borderRadius: '10px', // Increased border radius
    cursor: 'pointer',
    border: 'none',
    width: '100%', // Make buttons full-width
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#FAEED1', // Light gray background color for the entire homepage
    minHeight: '100vh', // Ensure the container covers the full height of the viewport
    padding: '20px', // Add padding for spacing
  };

  const cardStyles = {
    backgroundColor: '#dfe6e9', // Light blue background color
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added subtle shadow for a card-like appearance
    width: '400px', // Set a specific width for the card
  };

  const headingStyles = {
    fontSize: '3em', // Larger font size
    color: '#333',
    marginBottom: '20px',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>WELCOME TO THE THAI ID CARD WEBSITE</h1>

      <div style={cardStyles}>
        <button style={buttonStyles} onClick={() => navigate('/create')}>
          Upload New Identity Card
        </button>

        <button style={buttonStyles} onClick={() => navigate('/display')}>
          Display Identity Card
        </button>

        <button style={buttonStyles} onClick={() => navigate('/delete')}>
          Delete Identity Card
        </button>

        <button style={buttonStyles} onClick={() => navigate('/displayAll')}>
          Display All OCR and update if any
        </button>
      </div>
    </div>
  );
};

export default Homepage;
