import React, { useState } from "react";

const Register = () => {
  const [FormData, SetFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    country: "",
    Agreement: "",
  });

  const handlechange = (event) => {
    const { name, value, type, checked } = event.target;
    const agm = type === "checkbox" ? checked : value;
    SetFormData({
      ...FormData,
      [name]: agm,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("FormData", FormData);
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handlesubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input
                type="text"
                name="name"
                id="name"
                value={FormData.name}
                onChange={handlechange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                name="username"
                id="username"
                value={FormData.username}
                onChange={handlechange}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                value={FormData.email}
                onChange={handlechange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="number"
                name="phone"
                id="mobile"
                value={FormData.phone}
                onChange={handlechange}
                placeholder="Enter your number"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={FormData.password}
                onChange={handlechange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Select Country</span>
              <select
                id="country"
                name="country"
                value={FormData.country}
                onChange={handlechange}
              >
                <option value="">Select Country</option>
                <option value="India" className="details">
                  India
                </option>
                <option value="USA" className="details">
                  USA
                </option>
                <option value="Austrelia" className="details">
                  Austrelia
                </option>
                <option value="Caneda" className="details">
                  Caneda
                </option>
                <option value="SouthKoria" className="details">
                  South Koria
                </option>
              </select>
            </div>
          </div>
          <input
            type="checkbox"
            name="Agreement"
            id="Agreement"
            value={FormData.Agreement}
            onChange={handlechange}
          />
          <label htmlFor="Agree" id="Agree">
            Agree Turm & Condition
          </label>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
