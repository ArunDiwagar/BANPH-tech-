import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser, setEditIndex } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editIndex = useSelector((state) => state.user.editIndex);
  const users = useSelector((state) => state.user.users);

  const [formData, setFormData] = useState({
    userName: '',
    Age: '',
    Email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (editIndex !== null) {
      setFormData(users[editIndex]);
    }
  }, [editIndex, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, Age, Email, password, confirmPassword } = formData;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!userName || !Age || !Email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (userName.length < 5) {
      alert("UserName should have at least 5 characters");
      return;
    }
    if (!emailPattern.test(Email)) {
      alert("Invalid Email");
      return;
    }
    if (password.length < 6) {
      alert("Password should have at least 6 characters");
      return;
    }
    if (confirmPassword !== password) {
      alert("Confirm password is incorrect");
      return;
    }

    if (editIndex !== null) {
      dispatch(updateUser({ index: editIndex, data: formData }));
      dispatch(setEditIndex(null)); 
    } else {
      dispatch(addUser(formData));
    }

    setFormData({
      userName: '',
      Age: '',
      Email: '',
      password: '',
      confirmPassword: ''
    });

    alert("Form submitted successfully");
    navigate('/');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <button onClick={handleClose}>X</button>
      <h3>{editIndex !== null ? 'Edit User' : 'Add User'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.userName}
          name="userName"
          onChange={handleInput}
          placeholder="User Name"
        />
        <br />
        <input
          type="number"
          value={formData.Age}
          name="Age"
          onChange={handleInput}
          placeholder="Your Age"
        />
        <br />
        <input
          type="email"
          value={formData.Email}
          name="Email"
          onChange={handleInput}
          placeholder="Your Email Address"
        />
        <br />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleInput}
          placeholder="Your Password"
        />
        <br />
        <input
          type="password"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleInput}
          placeholder="Confirm Password"
        />
        <br />
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default Form;
