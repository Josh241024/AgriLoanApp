// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
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
//       const response = await fetch(`http://localhost:3000/users?email=${email}`);
//       const users = await response.json();

//       if (users.length === 0) {
//         setError('Invalid email');
//         return;
//       }

//       const user = users[0];
//       if (user.password !== password) {
//         setError('Invalid password');
//         return;
//       }

//       // Successful login
//       alert('Login successful');
//       navigate('/home');
//     } catch (error) {
//       setError('An error occurred');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
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
//       </form>
//       <p>
//         Don't have an account? <Link to="/signup">Signup</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
      const response = await fetch(`http://localhost:8000/users/?email=${email}`);
      const users = await response.json();

      if (users.length === 0) {
        setError('Invalid email');
        return;
      }

      const user = users[0];
      if (user.password !== password) {
        setError('Invalid password');
        return;
      }

      // Successful login
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
