// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './AdminLogin.css';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:3000/users?email=${email}&role=admin`);
//       const admins = await response.json();

//       if (admins.length === 0) {
//         setError('Invalid email');
//         return;
//       }

//       const admin = admins[0];
//       if (admin.password !== password) {
//         setError('Invalid password');
//         return;
//       }

//       // Successful login
//       alert('Admin Login successful');
//       navigate('/admin-home'); // Redirect to admin home page
//     } catch (error) {
//       setError('An error occurred');
//     }
//   };

//   return (
//     <div className="admin-login">
//       <h2>Admin Login</h2>
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
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//         <p>
//           Don't have an account? <Link to="/admin-signup">Signup</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/admins/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Admin Login successful');
        navigate('/admin-home'); // Redirect to admin home page
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/admin-signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
