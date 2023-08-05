import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
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
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={latitude}
          onChange={(e) => {
            setLatitude(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={longitude}
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
