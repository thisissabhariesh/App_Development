import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store user details in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      setError('Email already registered');
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.formGroup}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faUser} style={styles.icon} />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faLock} style={styles.icon} />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faLock} style={styles.icon} />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
          <div style={styles.orContainer}>
            <span style={styles.orText}>--------or--------</span>
          </div>
          <div style={styles.loginContainer}>
            <span style={styles.loginText}>
              Already have an account? <span onClick={handleLoginRedirect} style={styles.loginLink}>Login</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(95vh - 70px)',
    margin: '0',
    padding: '0 20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  heading: {
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: '10px',
  },
  icon: {
    fontSize: '20px',
    color: '#7C0A02',
  },
  input: {
    width: '100%',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '18px',
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: '#7C0A02',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '15px 0',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  orContainer: {
    textAlign: 'center',
    margin: '20px 0',
  },
  orText: {
    fontSize: '20px',
    color: '#333',
  },
  loginContainer: {
    textAlign: 'center',
  },
  loginText: {
    fontSize: '20px',
    color: '#ff0000',
  },
  loginLink: {
    color: '#007BFF',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  },
};

export default Register;
