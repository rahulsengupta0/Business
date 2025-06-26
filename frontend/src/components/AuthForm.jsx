import React, { useState, useEffect } from 'react';
import styles from './AuthForm.module.css';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { type, value } = e.target;
    const key =
      type === 'email' ? 'email' : type === 'password' ? 'password' : 'name';
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
  const endpoint = isSignup ? 'signup' : 'signin';
  const url = `http://localhost:5000/api/auth/${endpoint}`;

  try {
    const body = isSignup
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      : {
          email: formData.email,
          password: formData.password,
        };

    const res = await axios.post(url, body);

    if (isSignup) {
      setMessage('✅ Account created successfully! Please sign in.');
      setMessageType('success');
      setIsSignup(false); // Switch to sign in
    } else {
      const userName = res.data.user?.name || 'User';
      setMessage(`✅ Welcome, ${userName}!`);
      setMessageType('success');

      // ✅ Save token and redirect
      localStorage.setItem('token', res.data.token);

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }

    // Clear form
    setFormData({ name: '', email: '', password: '' });
  } catch (err) {
    const errorMsg =
      err.response?.data?.message || '❌ Something went wrong. Please try again.';
    setMessage(errorMsg);
    setMessageType('error');
  }
};


  // Auto-hide message after 4 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={`${styles.cont} ${isSignup ? styles.signup : ''}`}>
      <div className={`${styles.form} ${styles['sign-in']}`}>
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input type="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={formData.password} onChange={handleChange} />
        </label>
        <p className={styles['forgot-pass']}>Forgot password?</p>
        <button type="button" className={styles.submit} onClick={handleSubmit}>
          Sign In
        </button>
      </div>

      <div className={styles['sub-cont']}>
        <div className={styles.img}>
          <div className={`${styles['img__text']} ${styles['m--up']}`}>
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className={`${styles['img__text']} ${styles['m--in']}`}>
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div
            className={styles['img__btn']}
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage('');
            }}
          >
            <span className={styles['m--up']}>
              <FaUserPlus style={{ marginRight: '6px' }} />
              Sign Up
            </span>
            <span className={styles['m--in']}>
              <FaSignInAlt style={{ marginRight: '6px' }} />
              Sign In
            </span>
          </div>
        </div>

        <div className={`${styles.form} ${styles['sign-up']}`}>
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input type="text" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value={formData.password} onChange={handleChange} />
          </label>
          <button type="button" className={styles.submit} onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>

      {/* UI message below form */}
      {message && (
        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
            padding: '10px 20px',
            color: messageType === 'success' ? 'green' : 'red',
            background: messageType === 'success' ? '#eaffea' : '#ffeaea',
            border: `1px solid ${messageType === 'success' ? '#a6d8a6' : '#ffb3b3'}`,
            borderRadius: '8px',
            width: 'fit-content',
            marginInline: 'auto',
            fontWeight: 'bold',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AuthForm;
