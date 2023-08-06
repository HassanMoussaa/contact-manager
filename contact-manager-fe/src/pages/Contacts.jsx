import ContactCard from "../components/ContactCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Contacts.css";
const Contacts = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    // const jwtToken = Cookies.get("jwt_token");
    const result = await axios.get("http://127.0.0.1:8000/api/contacts", {
      //   headers: { Authorization: `Bearer ${jwtToken}` },
    });
    setContacts(result.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const navigateToAddContact = () => {
    navigate("/contacts/add");
  };

  return (
    <div>
      <div className="contactHeader">Contacts Page</div>
      <div className="addContainer">
        <button className="add" onClick={navigateToAddContact}>
          Add Contact
        </button>
      </div>
      {contacts.map((contact, index) => {
        return <ContactCard contact={contact} key={index} />;
      })}
    </div>
  );
};

export default Contacts;
