import React from "react";
import "../styles/tailwind.css";

function Login() {
  let login_user = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("https://ganeshgodse19.pythonanywhere.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        // Redirect to login page
        window.location.href = "/";
      } else {
        console.error("Error registering user:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  return (
    <div className="app bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-[#f68657] mb-6">
          Login
        </h1>
        <form onSubmit={login_user} className="space-y-4">
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#f68657] text-gray-900 font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#f68657]"
            >
              Login
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#f68657] hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
