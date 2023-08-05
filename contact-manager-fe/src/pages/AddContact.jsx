import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./Signin.css";
const AddContact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const submit = async () => {
    const data = { name, phone_number: phoneNumber, latitude, longitude };
    const jwtToken = Cookies.get("jwt_token");
    const result = await axios.post(
      "http://127.0.0.1:8000/api/contacts",
      data,
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );
  };
  return (
    <div className="signin_container">
      <div>
        <h2>Add Contact</h2>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone #"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={latitude}
          placeholder="latitude"
          onChange={(e) => {
            setLatitude(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={longitude}
          placeholder="longitude"
          onChange={(e) => {
            setLongitude(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default AddContact;
