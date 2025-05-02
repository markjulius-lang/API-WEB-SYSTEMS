// app/registration.js
'use client';

import './styles/registration.css'; 

export default function RegistrationForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dito Logic
  };

  return (
    <div className="container">
      <h1 className="title">Registration</h1>

      
      <form onSubmit={handleSubmit} className="form-container">
        <label className="label">Username</label>
        <input type="text" className="input" placeholder="Enter your username" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Enter your password" />

        <label className="label">Confirm Password</label>
        <input type="password" className="input" placeholder="Re-Enter your password" />

        <label className = "label">Email</label>
        <input type="email" className="input" placeholder="Enter your email" />

        <label className = "label">Phone Number</label>
        <input type = "tel" className = "input" placeholder = "Enter your Phone Number" />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
