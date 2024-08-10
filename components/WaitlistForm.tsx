import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/Home.module.css';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('waitlist').insert([{ email }]);
    
    if (error) {
      if (error.code === '23505') { // Assuming this is the unique constraint violation code
        setMessage('This email is already on the waitlist.');
      } else {
        setMessage('Error joining the waitlist. Please try again.');
      }
      setIsError(true);
    } else {
      setMessage('Successfully joined the waitlist!');
      setIsError(false);
      setEmail('');
    }
  };

  return (
    <div className="gap-5 mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:gap-4 items-center w-full">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-blue-900 p-2 px-2 rounded-l-md md:w-96 mb-2 md:mb-0 ${styles['thicker-text']}`}
          required
        />
        <button type="submit" className="bg-blue-900 text-white p-2 rounded-r-md md:flex-1 w-full md:px-2">
          Join Waitlist
        </button>
      </form>
      {message && (
        <p
          className={`text-center mt-4 ${isError ? styles['error-message'] : styles['success-message']}`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default WaitlistForm;
