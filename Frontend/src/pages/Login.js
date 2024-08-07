import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check for admin credentials
    if (email === 'admin@123' && password === '123') {
      navigate('/admin');
      return;
    }

    // Retrieve user details from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Record the login activity
      const loginActivity = JSON.parse(localStorage.getItem('loginActivity')) || [];
      loginActivity.push({ email: user.email, timestamp: new Date().toISOString() });
      localStorage.setItem('loginActivity', JSON.stringify(loginActivity));

      // Redirect to user-specific page or dashboard
      navigate('/dashboard'); // Replace with the route for non-admin users if needed
    } else {
      // Handle login failure
      alert('Invalid email or password');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/register'); // Redirect to the sign-up page
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <button type="submit" style={styles.button}>Login</button>
          <div style={styles.orContainer}>
            <span style={styles.orText}>--------or--------</span>
          </div>
          <div style={styles.signUpContainer}>
            <span style={styles.signUpText}>
              New to website? <span onClick={handleSignUpRedirect} style={styles.signUpLink}>Sign Up</span>
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
    height: 'calc(95vh - 70px)', // Adjust height for navbar and footer
    margin: '0',
    padding: '0 20px', // Ensure content is not too close to the edges
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px', // Increased padding for more space inside the form container
    maxWidth: '600px', // Increased form width
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)', // Enhanced box shadow for better visibility
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  heading: {
    marginBottom: '30px', // Increased margin for better spacing
    fontSize: '32px', // Larger heading text
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '30px', // Increased space between form groups
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: '10px', // Space between icon and input
  },
  icon: {
    fontSize: '20px', // Size of the icon
    color: '#7C0A02',
  },
  input: {
    width: '100%',
    padding: '15px', // Increased padding for larger inputs
    border: '1px solid #ddd',
    borderRadius: '5px', // Slightly more rounded corners
    fontSize: '18px', // Larger text size inside input
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: '#7C0A02',
    color: '#fff',
    border: 'none',
    padding: '15px', // Increased padding for larger buttons
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '15px 0', // Increased margin between buttons
    fontSize: '20px', // Larger button text size
    fontWeight: 'bold',
  },
  orContainer: {
    textAlign: 'center',
    margin: '20px 0', // Increased margin for the '--------or--------' text
  },
  orText: {
    fontSize: '20px', // Larger font size for better readability
    color: '#333',
  },
  signUpContainer: {
    textAlign: 'center',
  },
  signUpText: {
    fontSize: '20px', // Larger font size for the link text
    color: '#333',
  },
  signUpLink: {
    color: '#007BFF',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Login;
