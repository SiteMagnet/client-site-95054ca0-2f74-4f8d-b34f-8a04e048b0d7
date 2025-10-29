'use client';

import "./AuthForm.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

const AuthForm = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) return;
    setMessage('');

    try {
      let result;

      if (isLogin) {
        // Log in flow
        result = await supabase.auth.signInWithPassword({ email, password });

        if (result.error) {
          setMessage('Login error: ' + result.error.message);
          return;
        }
      } else {
        // Sign up flow (just auth)
       const {error} = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { display_name: fullName }, // optional user metadata
          },
        });

        // console.log("Sign-up result:", result);

        if (error) {
          console.error(error)
          setMessage('Sign-up error: ' + error.message);
          return;
        }

        // if (!result.data.user) {
        //   setMessage('Sign-up succeeded but no user object returned.');
        //   return;
        // }
      }

      // Redirect on success
      router.push('/dashboard');
    } catch (err) {
      console.error('Unexpected error:', err);
      setMessage('Unexpected error: ' + err.message);
    }
  };

  return (
    <div className="auth-form">
      <h1>SiteMagnet</h1>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}

        <button type="submit">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      {message && <p className="auth-message">{message}</p>}

      <button
        type="button"
        className="toggle-auth-mode"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Need to sign up?' : 'Already have an account? Log in'}
      </button>
    </div>
  );
};

export default AuthForm;
