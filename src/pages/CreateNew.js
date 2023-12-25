import React, { useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";

const CreatenewOCR = () => {
   const navigate=useNavigate();
   const [idcard,setidcard]=useState("");
   const [responseData, setResponseData] = useState(null);
   const handlecreate=async(e)=>
   {
      e.preventDefault();
      try {
        const IdcardData = new FormData();
        IdcardData.append("idcard", idcard);
        const { data } = await axios.post("/api/create-ocr", IdcardData);

        if (data?.success) {
          toast.error(data?.message);
        } else {
          toast.success("OCR Created Successfully");
          setResponseData(data);
          // navigate("/display");
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };

  return (
    <>
    <div></div>
    <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {idcard ? idcard.name : "Upload Photo"}
                  <input
                    type="file"
                    name="idcard"
                    // accept="image/*"
                    onChange={(e) => setidcard(e.target.files[0])}
                    // hidden
                  />
                </label>
      </div>
    <div><button onClick={handlecreate}>
      Submit
    </button></div>
    
    {responseData && (
        <div>
          <p>Data EXTRACTED</p>
          <p>
            <strong>Identification Number:</strong> {responseData.identificationNumber}
          </p>
          <p>
            <strong>Name:</strong> {responseData.name}
          </p>
          <p>
            <strong>Last Name:</strong> {responseData.lastName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {responseData.dateOfBirth}
          </p>
          <p>
            <strong>Date of Issue:</strong> {responseData.dateOfIssue}
          </p>
          <p>
            <strong>Date of Expiry:</strong> {responseData.dateOfExpiry}
          </p>
          
        </div>
      )}

    </>
  );
}
export default CreatenewOCR

