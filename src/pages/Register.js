import React from "react";
import "../styles/tailwind.css";

function Register() {
  let register_user = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
    };

    try {
      const response = await fetch(
        "https://ganeshgodse19.pythonanywhere.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        // Redirect to login page
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        console.error("Error registering user:", errorData);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="app bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-[#f68657] mb-6">
          Register
        </h1>
        <form onSubmit={register_user} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>

          {/* First Name */}
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68657] focus:border-transparent"
              required
            />
          </div>


          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#f68657] text-gray-900 font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#f68657]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
