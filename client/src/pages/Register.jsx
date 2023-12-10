import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// 1:16:21
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handelChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handelChange}
        />
        <input
          required
          type="text"
          placeholder="password"
          name="password"
          onChange={handelChange}
        />
        <button onClick={handelSubmit}>Register</button>
        <p>This is an error</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
