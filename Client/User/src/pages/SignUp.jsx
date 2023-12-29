import { useState, useEffect } from "react";
import axios, { USER_REGISTER_URL } from "../api/axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !userName ||
      !password ||
      !confirmPassword ||
      !contactNumber ||
      !address ||
      !nic
    )
      return toast.error("Please fill all the details!", toastOptions);

    try {
      const response = await axios.post(
        USER_REGISTER_URL,
        JSON.stringify({
          fullName,
          userName,
          password,
          contactNumber,
          address,
          nic,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response);

      if (!response.statusText) throw new Error("User Registration Failed");

      const { token } = await response.data;
      document.cookie = `token=${token}; path=/`;

      const decodedToken = jwtDecode(token);

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Hello ${decodedToken.fullName}!`,
        icon: "success",
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>snappy</h1>
          </div>

          <input
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name="fullname"
            placeholder="Full Name"
            type="text"
            autoComplete="fullname"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            placeholder="Username"
            type="text"
            autoComplete="username"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            autoComplete="confirmPassword"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            name="contactNumber"
            placeholder="Contact Number"
            type="text"
            autoComplete="contactNumber"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            type="text" 
            placeholder="Address"
            autoComplete="address"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <input
            id="nic"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            name="nic"
            placeholder="NIC"
            type="text"
            autoComplete="nic"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />

          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
          <span>
            Already have an account ? <Link to="/sign-in">Login.</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    // color: #DCF0FA;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }

  input{
    background-color: #DCF0FA;
  }

  input::placeholder{
    color: #131324;
  }

  input::value{
    color: #131324;
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default SignUp;
