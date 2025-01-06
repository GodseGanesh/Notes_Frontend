import React, { useState } from "react";

function Register() {
  const [backendErrors, setBackendErrors] = useState({});

  let register_user = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
    };

    try {
      const response = await fetch("https://ganeshgodse19.pythonanywhere.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        window.location.href = "/login"; // Redirect to login
      } else {
        const errorData = await response.json();
        setBackendErrors(errorData); // Capture backend errors
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={register_user}>
        {/* Other Form Fields */}
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
          {backendErrors.username && (
            <p className="error">{backendErrors.username[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          {backendErrors.password && (
            <p className="error">{backendErrors.password[0]}</p>
          )}
        </div>
        {/* Add similar error handling for other fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
