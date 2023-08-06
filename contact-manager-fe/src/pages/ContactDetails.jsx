import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Cookies from "js-cookie";
import MapCard from "../components/MapCard";
import "./ContactDetails.css";
const ContactDetails = () => {
  const { id } = useParams();

  const [contact, setContact] = useState([]);
  const fetchContact = async () => {
    // const jwtToken = Cookies.get("jwt_token");
    const result = await axios.get(`http://127.0.0.1:8000/api/contact/${id}`, {
      //   headers: { Authorization: `Bearer ${jwtToken}` },
    });
    setContact(result.data);
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const latitude = contact.latitude;
  const longitude = contact.longitude;
  console.log(latitude, longitude);
  return (
    <div>
      <div className="containerDetails">
        <div className="contactDetails">
          <h2>{contact.name}</h2>
          <p>Phone: {contact.phone_number}</p>
          <p>Latitude: {contact.latitude}</p>
          <p>Longitude: {contact.longitude}</p>
        </div>
      </div>
      <div>{/* <MapCard position={[latitude, longitude]} /> */}</div>
    </div>
  );
};

export default ContactDetails;
