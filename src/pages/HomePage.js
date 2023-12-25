import React, { useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Homepage = () => {
   const navigate=useNavigate();

  return (
    <>
    <div><button  onClick={() => navigate(`/create`)}>Upload New Identity Card</button>
    </div>
    <div><button onClick={() => navigate(`/update`)}>Update Identity Card</button>
    </div>
    <div><button onClick={() => navigate(`/display`)}>Display Identity Card</button>
    </div>
    <div> <button onClick={() => navigate(`/delete`)}>Delete Identity Card</button>
    </div>
    <div> <button onClick={()=> navigate('/displayAll')}>Display All OCR and update if any</button></div>
    </>
  )
}
export default Homepage


