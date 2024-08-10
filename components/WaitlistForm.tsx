import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/WaitlistForm.module.css';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('waitlist').insert([{ email }]);

    if (error) {
      setMessage('Error joining the waitlist. Please try again.');
      setIsError(true);
    } else {
      setMessage('Successfully joined the waitlist!');
      setIsError(false);
      setEmail('');
      setIsEmailValid(false);
    }
  };

  return (
    <div className="gap-5 mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          className={styles.translucentInput}
          required
        />
        <div className={`${styles.buttonWrapper} ${isEmailValid ? styles.showButton : styles.hidden}`}>
          <button
            type="submit"
            className={styles.translucentButton}
          >
            Join Waitlist
          </button>
        </div>
      </form>
      {message && (
        <p
          className={`${styles['success-message']} ${isError ? styles['error-message'] : ''}`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default WaitlistForm;
