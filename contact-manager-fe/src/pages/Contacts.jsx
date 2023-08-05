import ContactCard from "../components/ContactCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const result = await axios.get("http://127.0.0.1:8000/api/contacts", {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    setContacts(result.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <div>Contacts Page</div>

      {contacts.map((contact, index) => {
        return <ContactCard contact={contact} key={index} />;
      })}
    </div>
  );
};

export default Contacts;
