import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditIndex, removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Table() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.user.users);  // Fix this line
  
    const handleEdit = (index) => {
      dispatch(setEditIndex(index));
      navigate('/form');
    };
  
    const handleRemove = (index) => {
      dispatch(removeUser(index));
    };
  
    return (
      <>
        <button onClick={() => navigate('/form')}>Add User</button>
        <h3>Submitted data</h3>
        <table border={1}>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Password</th>
              <th>ConfirmPassword</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index}>
                <td>{data.userName}</td>
                <td>{data.Age}</td>
                <td>{data.Email}</td>
                <td>{data.password}</td>
                <td>{data.confirmPassword}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                  <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

export default Table;
