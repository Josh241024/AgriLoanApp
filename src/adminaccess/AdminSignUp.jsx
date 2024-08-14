// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './AdminLogin.css';

// const AdminSignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     const newAdmin = { email, password, role: 'admin' };

//     try {
//       const response = await fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newAdmin),
//       });

//       if (response.ok) {
//         alert("Admin Sign-up successful");
//         navigate('/admin-login'); // Redirect to admin login page
//       } else {
//         setError("Signup failed");
//       }
//     } catch (error) {
//       setError("An error occurred");
//     }
//   };

//   return (
//     <div className="admin-signup-page-final">
//       <h2>Admin Sign-up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Sign Up</button>
//         <p>
//           Already have an account? <Link to="/admin-login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AdminSignUp;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminSignUp.css';

const AdminSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newAdmin = { email, password, role: 'admin' };

    try {
      const response = await fetch('http://localhost:8000/admins/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin),
      });

      if (response.ok) {
        const data = await response.json(); // Get the response data with ID
        alert(`Admin Sign-up successful! Your ID is: ${data.id}`);
        navigate('/admin-login'); // Redirect to admin login page
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Signup failed");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div className="admin-signup-page">
      <h2>Admin Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/admin-login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminSignUp;
