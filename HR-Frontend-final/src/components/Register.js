import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Register() {


const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match ❌");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,  // IMPORTANT
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup Successful ✅");
      navigate("/login");
    } else {
      setError(data.error || "Signup failed ❌");
    }

  } catch (err) {
    console.error(err);
    setError("Server error ❌");
  }
};

  return (
    <div className="min-h-screen bg-[#082a57] flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-[#082a57] mb-6">
          Employee Register
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
          />


          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Create Password"
    onChange={handleChange}
    required
    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2 cursor-pointer"
  >
    {showPassword ? "🙈" : "👁️"}
  </span>
</div>
<div className="relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    placeholder="Re-enter Password"
    onChange={handleChange}
    required
    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
  />

  <span
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-2 cursor-pointer"
  >
    {showConfirmPassword ? "🙈" : "👁️"}
  </span>
</div>

          <button
            type="submit"
            className="w-full bg-[#082a57] text-white py-2 rounded-lg hover:opacity-90"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/login" className="text-[#082a57] font-semibold ml-1">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}