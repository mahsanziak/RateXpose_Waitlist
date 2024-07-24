import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('waitlist').insert([{ email }]);
    if (error) {
      setMessage('Error joining the waitlist. Please try again.');
    } else {
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mt-8 w-full max-w-lg">
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded-l-md w-full mb-2 md:mb-0 md:flex-1"
        required
      />
      <button type="submit" className="bg-white text-black p-2 rounded-r-md w-full md:w-auto md:px-4">
        Join Waitlist
      </button>
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
    </form>
  );
};

export default WaitlistForm;
