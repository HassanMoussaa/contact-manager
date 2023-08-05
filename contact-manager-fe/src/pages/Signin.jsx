import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const result = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });

    Cookies.set("jwt_token", result.data.authorization.token, { expires: 1 });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default Signin;
